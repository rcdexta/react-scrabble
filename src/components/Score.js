import React, {Component} from 'react'
import {ScoreDiv} from '../styles/Grid'

export default class Score extends Component {

  render() {
    return <ScoreDiv>
      {this.props.value}
    </ScoreDiv>
  }

}