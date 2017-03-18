import React, {Component, PropTypes} from 'react'
import {TileDiv} from '../styles/Grid'

export default class Tile extends Component {

  onSelect = () => {
    this.props.notifySelect(this.props.row, this.props.col, this.props.letter)
  }

  render() {
    const {letter} = this.props
    let customStyle = this.props.selected ? {background: '#ff4500'} : {}
    customStyle = this.props.completed ? {background: '#ffd700'} : customStyle
    return <TileDiv key={this.props.id} data-letter={letter} style={customStyle} onClick={this.onSelect}/>
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