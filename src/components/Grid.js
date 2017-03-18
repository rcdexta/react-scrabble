import React, {Component} from 'react'
import {GridDiv} from '../styles/Grid'
import {data} from './data'
import Tile from './Tile'
import update from 'immutability-helper';

export default class Grid extends Component {

  state = {currentSelection: []}

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

  handleSelect = (row, col) => {
    const {currentSelection} = this.state
    const firstSelection = currentSelection.length === 0

    // if (!firstSelection) {
    //   console.log(this.sameRow(currentSelection, row))
    //   console.log(this.adjacentColumn(currentSelection, col))
    //   console.log(this.sameCol(currentSelection, col))
    //   console.log(this.adjacentRow(currentSelection, row))
    // }

    const adjacentTileSelected = (this.sameRow(currentSelection, row) && this.adjacentColumn(currentSelection, col)) ||
      (this.sameCol(currentSelection, col) && this.adjacentRow(currentSelection, row))

    if (firstSelection || adjacentTileSelected) {
      this.setState(update(this.state, {
        currentSelection: {
          $push: [{...{row, col}}]
        }
      }))
    } else {
      this.setState({currentSelection: [{row, col}]})
    }
  }

  render() {
    return <GridDiv>
      {
        data.map((row, i) => {
          return row.line.split('').map((letter, j) => {
            const id = `${i}${j}`
            const selected = this.state.currentSelection.some((sel) => sel.row === i && sel.col === j)
            return <Tile id={id}
                         key={id}
                         letter={letter}
                         selected={selected}
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