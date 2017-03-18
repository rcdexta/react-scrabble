import React, {Component} from 'react'
import {BoardDiv, RackDiv, RackTile} from '../styles/Board'
import Grid from './Grid'

const Title = ({text}) => (
  <RackDiv>
    {
      text.split('').map((letter, idx) => (
        <RackTile key={`Title${idx}`} data-letter={letter}/>
      ))
    }
  </RackDiv>
)

export default class Board extends Component {

  render() {
    return <BoardDiv>
      <Title text='scrabble'/>
      <Grid/>
    </BoardDiv>
  }

}

Board.propTypes = {}
