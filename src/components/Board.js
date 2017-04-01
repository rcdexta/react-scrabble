import React, {Component, PropTypes} from 'react'
import {BoardDiv, RackDiv, RackTile} from '../styles/Board'
import Grid from './Grid'
import Title from './Title'

export default class Board extends Component {

  render() {
    return <BoardDiv>
      <Title text='scrabble'/>
      <Grid {...this.props}/>
    </BoardDiv>
  }

}

Board.propTypes = {
  data: PropTypes.array.isRequired,
  updateStats: PropTypes.func,
  onExit: PropTypes.func
}
