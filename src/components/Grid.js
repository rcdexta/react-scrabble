import React, {Component} from 'react'
import {GridDiv} from '../styles/Grid'
import {data} from './data'
import Tile from './Tile'
import update from 'immutability-helper';

const givenWords = ['DISPLACEMENT', 'FORCE']

export default class Grid extends Component {

  state = {
    curSelectionPos: [],
    curSelectionLetters: [],
    completedSelectionPos: []
  }

  sameRow = (selection, row) => {
    return selection.every((s) => s.row === row)
  }

  sameCol = (selection, col) => {
    return selection.every((s) => s.col === col)
  }

  areAdjacentTiles = (selection) => {
    for (let i = 0; i < selection.length - 1; i++) {
      if (Math.abs(selection[i] - selection[i + 1]) !== 1) {
        return false
      }
    }
    return true
  }

  adjacentColumn = (selection, newCol) => {
    const selectedCols = selection.map((s) => s.col)
    selectedCols.push(newCol)
    return this.areAdjacentTiles(selectedCols)
  }

  adjacentRow = (selection, newRow) => {
    const selectedRows = selection.map((s) => s.row)
    selectedRows.push(newRow)
    return this.areAdjacentTiles(selectedRows)
  }

  checkIfWordCompleted = () => {
    const {curSelectionPos, curSelectionLetters} = this.state
    const currentWord = curSelectionLetters.join('')
    if (givenWords.some((w) => w === currentWord)) {
      this.setState(update(this.state,
        {
          curSelectionPos: {$set: []},
          curSelectionLetters: {$set: []},
          completedSelectionPos: {
            $push: curSelectionPos
          }
        }))
    }
  }

  handleSelect = (row, col, letter) => {
    const {curSelectionPos} = this.state
    const firstSelection = curSelectionPos.length === 0

    const adjacentTileSelected = (this.sameRow(curSelectionPos, row) && this.adjacentColumn(curSelectionPos, col)) ||
      (this.sameCol(curSelectionPos, col) && this.adjacentRow(curSelectionPos, row))

    if (firstSelection || adjacentTileSelected) {
      this.setState(update(this.state, {
        curSelectionPos: {
          $push: [{...{row, col}}]
        },
        curSelectionLetters: {
          $push: [letter]
        }
      }), this.checkIfWordCompleted)
    } else {
      this.setState({curSelectionPos: [{row, col}], curSelectionLetters: [letter]})
    }
  }

  render() {
    return <GridDiv>
      {
        data.map((row, i) => {
          return row.line.split('').map((letter, j) => {
            const id = `${i}${j}`
            const selected = this.state.curSelectionPos.some((sel) => sel.row === i && sel.col === j)
            const completed = this.state.completedSelectionPos.some((sel) => sel.row === i && sel.col === j)
            return <Tile id={id}
                         key={id}
                         letter={letter}
                         selected={selected}
                         completed={completed}
                         row={i}
                         col={j}
                         notifySelect={this.handleSelect}
            />
          })
        })
      }
    </GridDiv>
  }
}