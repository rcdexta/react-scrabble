import React, {Component, PropTypes} from 'react'
import {HintIcon} from '../styles/Grid'
import {OverlayDiv, PopupDiv, CloseButton, HintContainerDiv, HintItem} from '../styles/Hint'
import {IdeaImg} from '../images/idea-png'

export default class Hint extends Component {

  state = {show: false}

  onHint = () => {
    this.props.opened()
    this.setState({show: true})
  }

  onClose = () => {
    this.setState({show: false})
  }

  render() {
    return <HintIcon >
      <img src={IdeaImg} onClick={this.onHint} style={{width: 64, height: 64}}/>
      {
        this.state.show &&
        <OverlayDiv>
          <PopupDiv>
            <CloseButton onClick={this.onClose}>&times;</CloseButton>
            <div className="content">
              {this.props.allWords.map((entry) => {
                const itemStyle = this.props.completedWords.includes(entry.word) ? {textDecoration: 'line-through'} : {}
                return <HintItem key={entry.word} style={itemStyle}>{entry.hint}</HintItem>
              })}
            </div>
          </PopupDiv>
        </OverlayDiv>
      }
    </HintIcon>
  }

}

Hint.PropTypes = {
  allWords: PropTypes.array.isRequired,
  completedWords: PropTypes.array.isRequired,
  opened: PropTypes.func
}