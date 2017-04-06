import React, {Component, PropTypes} from 'react'
import {GridDiv, BoardLayout, RightPane, CounterDiv} from '../styles/Grid'
import Tile from './Tile'
import update from 'immutability-helper';
import Score from './Score'
import Hint from './Hint'
import FinalPopup from './FinalPopup'
import Generator from '../helpers/generator'
import ReactCountdownClock from 'react-countdown-clock'

export default class Grid extends Component {

  state = {
    showFinalPopup: false,
    curSelectionPos: [],
    curSelectionLetters: [],
    completedSelectionPos: [],
    completedWords: [],
    hintsTaken: 0,
  }

  sameRow = (selection, row) => {
    return selection.every((s) => s.row === row)
  }

  formattedCurrentTime = () => {
    const date = new Date()
    return new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toJSON();
  }

  componentWillMount() {
    const {matrix, hintDirection} = Generator.generateGrid(this.words);
    this.setState({grid: matrix, hintDirection: hintDirection, startedAt: this.formattedCurrentTime()})
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

  get words() {
    return this.props.data.map((w) => w.word)
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

  requestedHint = () => {
    this.setState({hintsTaken: this.state.hintsTaken + 1})
  }

  hasCompleted = () => {
    return this.state.completedWords.length === this.words.length
  }

  checkIfPlayerWon = () => {
    if (this.hasCompleted()) {
      this.setState({showFinalPopup: true})
    }
  }

  timeup = () => {
    this.props.updateStats(this.stats())
    this.setState({showFinalPopup: true})
  }

  stats = () => {
    const {completedWords, hintsTaken, startedAt} = this.state
    const stats = {
      completed: this.hasCompleted(),
      score: completedWords.length,
      started_at: startedAt,
      total_score: this.words.length,
      ended_at: this.formattedCurrentTime(),
      metadata: {hints_taken: hintsTaken}
    }
    return stats
  }

  checkIfWordCompleted = () => {
    const {curSelectionPos, curSelectionLetters} = this.state
    const currentWord = curSelectionLetters.join('')
    if (this.words.some((w) => w === currentWord)) {
      this.setState(update(this.state,
        {
          curSelectionPos: {$set: []},
          curSelectionLetters: {$set: []},
          completedSelectionPos: {
            $push: curSelectionPos
          },
          completedWords: {
            $push: [currentWord]
          }
        }), () => {
        this.props.updateStats(this.stats())
        this.checkIfPlayerWon()
      })
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
    const {completedWords, hintDirection, grid, showFinalPopup} = this.state
    return <BoardLayout>
      <GridDiv>
        {
          grid && grid.map((row, i) => {
            return row.map((letter, j) => {
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
      <RightPane>
        <Score score={completedWords.length} total={this.words.length}/>
        <FinalPopup show={showFinalPopup} completed={this.hasCompleted()} onExit={this.props.onExit}/>
        {
          !showFinalPopup &&
              <CounterDiv>
                <ReactCountdownClock seconds={600}
                                     color="ivory"
                                     alpha={0.9}
                                     size={85}
                                     weight={10}
                                     onComplete={this.timeup}/>
              </CounterDiv>
        }
      </RightPane>
      <RightPane>
        <Hint allWords={this.props.data}
              hintDirection={hintDirection}
              completedWords={completedWords}
              opened={this.requestedHint}/>
      </RightPane>
    </BoardLayout>
  }
}

Grid.PropTypes = {
  data: PropTypes.array.isRequired,
  updateStats: PropTypes.func,
  onExit: PropTypes.func
}