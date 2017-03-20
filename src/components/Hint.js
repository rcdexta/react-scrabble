import React, {Component} from 'react'
import {HintDiv} from '../styles/Grid'
import {OverlayDiv, PopupDiv, CloseButton} from '../styles/Hint'

export default class Hint extends Component {

  state = {show: false}

  onHint = () => {
    this.setState({show: true})
  }

  onClose = () => {
    this.setState({show: false})
  }

  render() {
    const showStyle = this.state.show ? {opacity: 1, visibility: 'visible'} : {visibility: 'hidden', opacity: 0}
    console.log(showStyle)
    return <HintDiv>
      <div onClick={this.onHint}>?</div>
      <OverlayDiv style={showStyle}>
        <PopupDiv>
          <CloseButton onClick={this.onClose}>&times;</CloseButton>
          <div className="content">
            {this.props.hint}
          </div>
        </PopupDiv>
      </OverlayDiv>
    </HintDiv>
  }

}