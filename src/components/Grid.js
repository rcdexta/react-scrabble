import React, {Component} from 'react'
import {GridDiv} from '../styles/Grid'
import {data} from './data'
import Tile from './Tile'

export default class Grid extends Component {

  render() {
    return <GridDiv>
      {
        data.map((row, i) => {
          return row.line.split('').map((letter, j) => {
            const id = `${i}${j}`
            return <Tile id={id}
                         key={id}
                         letter={letter}
                         row={i}
                         col={i}/>
          })
        })
      }
    </GridDiv>
  }
}