const scoreMap = {"EAIONRTLSU": 1, "DG": 2, "BCMP": 3, "FHVWY": 4, "K": 5, "JX": 8, "QZ": 10}

const Scorer = {

  calculate: (letters) => {
    return Array.from(letters).reduce((acc, letter) => {
      return acc + Scorer.scoreForLetter(letter)
    }, 0)
  },

  scoreForLetter: (letter) => {
    const lettersGroup = Object.keys(scoreMap)
    const group = lettersGroup.find((g) => g.includes(letter))
    return scoreMap[group]
  }
}

export default Scorer