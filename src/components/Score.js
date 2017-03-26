import React, {Component, PropTypes} from 'react'
import {ScoreDiv} from '../styles/Grid'

export default class Score extends Component {

  render() {
    const {score, total} = this.props
    return <ScoreDiv>
      {score}/{total}
    </ScoreDiv>
  }

}

Score.PropTypes = {
  score: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
}