import React, {Component, PropTypes} from 'react'
import {HintContainer, HintItem, Mask, Clue, TickMark, Found, Header} from '../styles/Hint'

export default class Hint extends Component {

  foundWord = (word) => {
    return this.props.completedWords.includes(word)
  }

  componentWillMount() {
    this.across = this.shuffleArray(this.props.hintDirection.across)
    this.down = this.shuffleArray(this.props.hintDirection.down)
  }

  shuffleArray = (arr) => {
    for (let i = arr.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
    }
    return arr
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
        <Header>ACROSS</Header>
        {this.renderWords(this.across)}
        <Header>DOWN</Header>
        {this.renderWords(this.down)}
      </div>
    </HintContainer>
  }

}

Hint.PropTypes = {
  allWords: PropTypes.array.isRequired,
  completedWords: PropTypes.array.isRequired,
  opened: PropTypes.func
}