import React, {Component} from 'react'
import {BoardDiv, RackDiv, RackTile} from '../styles/Board'
import Grid from './Grid'
import Title from './Title'

export default class Board extends Component {

  render() {
    return <BoardDiv>
      <Title text='scrabble'/>
      <Grid data={this.props.data}/>
    </BoardDiv>
  }

}

Board.propTypes = {}
