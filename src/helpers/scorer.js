const scoreMap = {"EAIONRTLSU": 1, "DG": 2, "BCMP": 3, "FHVWY": 4, "K": 5, "JX": 8, "QZ": 10}

function scoreForLetter(letter) {
  const lettersGroup = Object.keys(scoreMap)
  const group = lettersGroup.find((g) => g.includes(letter))
  return scoreMap[group]
}

export function calculteScore(letters) {
  return Array.from(letters).reduce((acc, letter) => {
    return acc + scoreForLetter(letter)
  }, 0)
}