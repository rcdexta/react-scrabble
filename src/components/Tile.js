import React, {Component, PropTypes} from 'react'
import {TileDiv} from '../styles/Grid'
import {PointsDiv} from '../styles/Board'

export default class Tile extends Component {

  onSelect = () => {
    this.props.notifySelect(this.props.row, this.props.col, this.props.letter)
  }

  points = () => {
    return this.props.completed ? <PointsDiv>+1</PointsDiv> : ''
  }

  render() {
    const {letter} = this.props
    let customStyle = this.props.selected ? {background: '#ff4500'} : {}
    customStyle = this.props.completed ? {
        background: 'ff4500', boxShadow: '0px 0px 8px 2px #ffebcd',
        animation: 'greenPulse 1s 1', color: '#ffdb1a', textShadow: 'none'
      } : customStyle
    return <span>
      {this.points()}
      <TileDiv key={this.props.id} data-letter={letter} style={customStyle} onClick={this.onSelect}/>
    </span>
  }
}

Tile.PropTypes = {
  letter: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
  completed: PropTypes.bool.isRequired,
  notifySelect: PropTypes.func
}