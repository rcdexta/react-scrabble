import React from 'react';
import {storiesOf, action} from '@kadira/storybook';

import {Board} from '../src';

export const data = [
  {
    word: 'FAR',
    hint: '_ _ R : that means not so close'
  },
  {
    word: 'PERIODIC',
    hint: 'P_R_ _D_C : your timetable has this'
  },
  {
    word: 'KILOMETRE',
    hint: '_ _LO_ _TR_ : distance between two cities is represented by this word'
  },
  {
    word: 'TIME',
    hint: '_ _ _ _ : waste this and you can never get it back'
  },
  {
    word: 'PARALLAX',
    hint: '_ _R_LL_ _ : avoid this error to take measurements correctly'
  },
  {
    word: 'RANDOM',
    hint: '_ _ND_ _ :  never happens as we predict'
  },
  {
    word: 'MOTION',
    hint: '_ _ _ _ _N : the act of movement or change in position of an object'
  },
  {
    word: 'REST',
    hint: '_ES_ :  when it never moves'
  },
  {
    word: 'TRUCK',
    hint: '_ _U_K : can move goods from one city to another'
  },
  {
    word: 'INCH',
    hint: '_ _ _ _ : your height is mostly told in this'
  },
  {
    word: 'MEASURE',
    hint: 'M_ _S_ _ _ : the act of calculating the size or amount of something'
  }
]

function updateStats(stats) {
  console.log('New Stats')
  console.log(stats)
}

function handleExit() {
  console.log('game over')
}

storiesOf('react-scrabble', module)
  .add('default', () => {
    return <Board data={data} updateStats={updateStats} onExit={handleExit}/>
  });
