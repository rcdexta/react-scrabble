import React, {Component, PropTypes} from 'react'
import {TileDiv} from '../styles/Grid'

export default class Tile extends Component {

  onSelect = () => {
    this.props.notifySelect(this.props.row, this.props.col)
  }

  render() {
    const {letter} = this.props
    const style = this.props.selected ? {background: '#ff4500'} : {}
    return <TileDiv key={this.props.id} data-letter={letter} style={style} onClick={this.onSelect}/>
  }
}

Tile.PropTypes = {
  letter: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
  notifySelect: PropTypes.func
}