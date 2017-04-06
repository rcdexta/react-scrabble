import React, {Component, PropTypes} from 'react'
import {PopupDiv, HintItem} from '../styles/Hint'

export default class Hint extends Component {

  renderWords = (words) => {
    return words.map((word) => {
      const entry = this.props.allWords.find((w) => w.word === word)
      const itemStyle = this.props.completedWords.includes(entry.word) ? {textDecoration: 'line-through'} : {}
      return <HintItem key={entry.word} style={itemStyle}>{entry.hint}</HintItem>
    })
  }

  render() {
    return <PopupDiv>
      <div className="content">
        <h3>Across</h3>
        {this.renderWords(this.props.hintDirection.across)}
        <h3>Down</h3>
        {this.renderWords(this.props.hintDirection.down)}
      </div>
    </PopupDiv>
  }

}

Hint.PropTypes = {
  allWords: PropTypes.array.isRequired,
  completedWords: PropTypes.array.isRequired,
  opened: PropTypes.func
}