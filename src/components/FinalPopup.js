import React, {Component, PropTypes} from 'react'
import {OverlayDiv, PopupDiv, FinalMascot, GameButton} from '../styles/Board'
import {PandaSuccessImg} from '../images/success-panda-png'
import {NiceTryPandaImg} from '../images/try-panda-png'

export default class FinalPopup extends Component {

  content = () => {
    if (this.props.completed) {
      return <FinalMascot src={PandaSuccessImg}/>
    } else {
      return <FinalMascot src={NiceTryPandaImg}/>
    }
  }

  render() {
    if (this.props.show) {
      return <OverlayDiv>
        <PopupDiv>
          <div className="content">
            {this.content()}
            <div>
              <GameButton onClick={this.props.onExit}>BACK</GameButton>
            </div>
          </div>
        </PopupDiv>
      </OverlayDiv>
    }
    else {
      return <span></span>
    }
  }
}

FinalPopup.PropTypes = {
  show: PropTypes.bool.required,
  completed: PropTypes.bool.required,
  onExit: PropTypes.func
}