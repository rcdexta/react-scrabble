import React, {Component, PropTypes} from 'react'
import {BoardDiv, RackDiv, RackTile} from '../styles/Board'
import Grid from './Grid'
import Title from './Title'

export default class Board extends Component {

  render() {
    const {style, ...otherProps} = this.props
    return <BoardDiv style={style}>
      <Title text='scrabble'/>
      <Grid {...otherProps}/>
    </BoardDiv>
  }

}

Board.propTypes = {
  data: PropTypes.array.isRequired,
  updateStats: PropTypes.func,
  onExit: PropTypes.func
}
