let matrix = null;
let placeHolder = '-1'

function defineMatrix(n) {
  var matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = new Array();
    for (let j = 0; j < n; j++) {
      matrix[i][j] = placeHolder;
    }
  }
  return matrix;
}

function fillWordAcrossRow(rowNum, startingPoint, word) {
  var wordArray = word.split('')
  for (let i = startingPoint, j = 0; i < word.length + startingPoint; i++, j++) {
    matrix[rowNum][i] = wordArray[j];
  }
}

function fillWordAcrossColumn(columnNum, startingPoint, word) {
  var wordArray = word.split('')
  for (let i = startingPoint, j = 0; i < word.length + startingPoint; i++, j++) {
    matrix[i][columnNum] = wordArray[j];
  }
}

function findCellsForRow(word, rowNum) {
  var len = matrix.length
  var maxStartingPoint = len - word.length;
  for (let x = 1; x <= 3; x++) {
    var startingPoint = randomTill(maxStartingPoint)
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
  var len = matrix.length
  var maxStartingPoint = len - word.length;
  for (let x = 1; x <= 10; x++) {
    var startingPoint = randomTill(maxStartingPoint)
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
  if (direction == 'row') {
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
  var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === placeHolder) {
        matrix[i][j] = alphabets[Math.floor(Math.random() * alphabets.length)]
      }
    }
  }
}

module.exports = {
  generateGrid: (words) => {
    let n = 14;
    matrix = defineMatrix(n)
    words.sort((w1, w2) => w2.length - w1.length)
    console.log(words)

    var direction = ['row', 'col']
    for (let i = 0; i < words.length; i++) {
      let word = words[i]
      var isAllocated = findCells(word, i, direction[i % 2]);
      if (!isAllocated) {
        isAllocated = findCells(word, i, direction[(i + 1) % 2]);
      }
      if (!isAllocated) {
        console.error("Could not allot word: " + word)
      }
    }
    fillRandomAlphabets(n);
    return matrix
  }
}

