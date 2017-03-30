let matrix = null;

function defineMatrix(n)
{
  var matrix = [];
for (let i=0;i<n;i++) {
  matrix[i]=new Array();
    for (let j=0;j<n;j++) {
      matrix[i][j]='x';
 }
  }
  return matrix;
}

function fillWordAcrossRow(rowNum,startingPoint, word){
  var wordArray = word.split('')
  for (let i= startingPoint, j=0; i<word.length+startingPoint ; i++, j++){
    matrix[rowNum][i]= wordArray[j] ;
  }
}

function fillWordAcrossColumn(columnNum,startingPoint, word){
  var wordArray = word.split('')
  for (let i= startingPoint, j=0; i<word.length+startingPoint ; i++, j++){
    matrix[i][columnNum]= wordArray[j] ;
  }
}

function findCellsForRow(word, rowNum)
{
    var len = matrix.length
    var maxStartingPoint = len - word.length;
    for(let x=1; x<=3; x++){
    var startingPoint= randomTill(maxStartingPoint)
    var wordArray = word.split('')
    let canBeAllotted = true;
    for (let i= startingPoint; i<word.length+startingPoint ; i++){
      if(matrix[rowNum][i] != 'x')
      {
       canBeAllotted = false;
       break;
      }
    }
    if(canBeAllotted){
      fillWordAcrossRow(rowNum, startingPoint, word);
      return true;
    }
}
return false;
}
function findCellsForColumn(word, columnNum)
{
    var len = matrix.length
    var maxStartingPoint = len - word.length;
    for(let x=1; x<=10; x++){
    var startingPoint= randomTill(maxStartingPoint)
    var wordArray = word.split('')
    let canBeAllotted = true;
    for (let i= startingPoint; i<word.length+startingPoint ; i++){
      if(matrix[i][columnNum] != 'x')
      {
       canBeAllotted = false;
       break;
      }
    }
    if(canBeAllotted){
      fillWordAcrossColumn(columnNum, startingPoint, word);
      return true;
    }
    }
    return false;
}

function findCells(word, rowNum,columnNum, direction){
  if(direction == 'row'){
    return findCellsForRow(word, rowNum)
  }
  else{
    return findCellsForColumn(word, columnNum)
  }
}

function randomTill(n){
  return Math.floor(Math.random() * (n - 0 + 1)) + 0;
}

function fillRandomAlphabets(n){
  var alphabets = "abcdefghijklmnopqrstuvwxyz"
  for (let i=0;i<n;i++){
    for (let j=0;j<n;j++){
    if(matrix[i][j] == 0){
      matrix[i][j] = alphabets[Math.floor(Math.random() * alphabets.length)]
    }
    }
  }
}

let n = 10;
matrix = defineMatrix(n)

var words = ['priyanka','four','five', 'two','chan']
var direction = ['row', 'col']
for(let i=0; i<words.length ; i++){
  let word = words[i]
  var isAllocated = findCells(word, i, i, direction[i%2]);
  if(!isAllocated){
    var isAllocated = findCells(word, i, i, direction[(i+1)%2]);
  }
  // fillRandomAlphabets(n);
}

for(let i =0; i<n ;i++){
  console.log(matrix[i].join(''))
}
