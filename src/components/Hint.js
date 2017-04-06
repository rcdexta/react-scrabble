import React, {Component, PropTypes} from 'react'
import {HintContainer, HintItem, Mask, Clue, TickMark, Found} from '../styles/Hint'

export default class Hint extends Component {

  foundWord = (word) => {
    return this.props.completedWords.includes(word)
  }

  renderWords = (words) => {
    return words.map((word) => {
      const entry = this.props.allWords.find((w) => w.word === word)
      const [mask, clue] = entry.hint.split(':')
      const tickMark = this.foundWord(entry.word) ? <TickMark> ✓ </TickMark> : ''
      return <HintItem key={entry.word}>
        <Mask>{this.foundWord(entry.word) ? <Found>{word}</Found> : mask} {tickMark}</Mask>
        <Clue>{clue}</Clue>
      </HintItem>
    })
  }

  render() {
    return <HintContainer>
      <div className="content">
        <h3>Across</h3>
        {this.renderWords(this.props.hintDirection.across)}
        <h3>Down</h3>
        {this.renderWords(this.props.hintDirection.down)}
      </div>
    </HintContainer>
  }

}

Hint.PropTypes = {
  allWords: PropTypes.array.isRequired,
  completedWords: PropTypes.array.isRequired,
  opened: PropTypes.func
}