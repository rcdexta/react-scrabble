let matrix = null;
let placeHolder = '-1'

function defineMatrix(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = new Array();
    for (let j = 0; j < n; j++) {
      matrix[i][j] = placeHolder;
    }
  }
  return matrix;
}

function fillWordAcrossRow(rowNum, startingPoint, word) {
  let wordArray = word.split('')
  for (let i = startingPoint, j = 0; i < word.length + startingPoint; i++, j++) {
    matrix[rowNum][i] = wordArray[j];
  }
}

function fillWordAcrossColumn(columnNum, startingPoint, word) {
  let wordArray = word.split('')
  for (let i = startingPoint, j = 0; i < word.length + startingPoint; i++, j++) {
    matrix[i][columnNum] = wordArray[j];
  }
}

function findCellsForRow(word, rowNum) {
  let len = matrix.length
  let maxStartingPoint = len - word.length;
  for (let x = 1; x <= 3; x++) {
    let startingPoint = randomTill(maxStartingPoint)
    let canBeAllotted = true;
    for (let i = startingPoint; i < word.length + startingPoint; i++) {
      if (matrix[rowNum][i] != placeHolder) {
        canBeAllotted = false;
        break;
      }
    }
    if (canBeAllotted) {
      fillWordAcrossRow(rowNum, startingPoint, word);
      return true;
    }
  }
  return false;
}
function findCellsForColumn(word, columnNum) {
  let len = matrix.length
  let maxStartingPoint = len - word.length;
  for (let x = 1; x <= 10; x++) {
    let startingPoint = randomTill(maxStartingPoint)
    let canBeAllotted = true;
    for (let i = startingPoint; i < word.length + startingPoint; i++) {
      if (matrix[i][columnNum] != placeHolder) {
        canBeAllotted = false;
        break;
      }
    }
    if (canBeAllotted) {
      fillWordAcrossColumn(columnNum, startingPoint, word);
      return true;
    }
  }
  return false;
}

function findCells(word, pos, direction) {
  if (direction == 'across') {
    return findCellsForRow(word, pos)
  }
  else {
    return findCellsForColumn(word, pos)
  }
}

function randomTill(n) {
  return Math.floor(Math.random() * (n - 0 + 1)) + 0;
}

function fillRandomAlphabets(n) {
  let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === placeHolder) {
        matrix[i][j] = alphabets[Math.floor(Math.random() * alphabets.length)]
      }
    }
  }
}

function randomDirection() {
  const direction = ['across', 'down']
  return direction[Math.floor(Math.random() * direction.length)]
}

function otherDirection(curDirection) {
  return curDirection === 'across' ? 'down' : 'across'
}

module.exports = {

  generateGrid: (words) => {
    const n = 14;
    matrix = defineMatrix(n)
    words.sort((w1, w2) => w2.length - w1.length)

    const hintDirection = {across: [], down: []}

    for (let i = 0; i < words.length; i++) {
      let word = words[i]
      let direction = randomDirection()
      let isAllocated = findCells(word, i, direction);
      isAllocated && hintDirection[direction].push(word)
      if (!isAllocated) {
        let newDirection = otherDirection(direction)
        isAllocated = findCells(word, i, newDirection);
        isAllocated && hintDirection[newDirection].push(word)
      }
      if (!isAllocated) {
        console.error("Could not allot word: " + word)
      }
    }
    fillRandomAlphabets(n);
    return {matrix: matrix, hintDirection: hintDirection}
  }
}

