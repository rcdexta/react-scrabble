import React from 'react';
import {storiesOf, action} from '@kadira/storybook';

import {Board} from '../src';

export const data = [
  {
    word: 'PERIMETER',
    hint: 'P_ _I_ _T_R : the continuous line forming the boundary of a closed shape, like square of circle'
  },
  {
    word: 'RAY',
    hint: '_ _ _ : sun emits light ? which reaches us at earth. These travel in straight lines'
  },
  {
    word: 'STRAIGHT',
    hint: 'S_ _A_GH_ : A line is always ?'
  },
  {
    word: 'LINE',
    hint: '_ _ _ _ : A straight path joined by two points is called ?'
  },
  {
    word: 'PERPENDICULAR',
    hint: 'P_ _P_ _ _I_ _ _ _R :  two lines that intersect at right angles are ? to each other'
  },
  {
    word: 'KILO',
    hint: '_ _ _ _ :  1000 units of a standard unit is called ?'
  },
  {
    word: 'DECA',
    hint: '_ _ C _ : 100 units of a standard unit is called ?'
  },
  {
    word: 'DECI',
    hint: '_ _ C _ :   1/100 of a unit is called ?'
  },
  {
    word: 'MILLI',
    hint: '_ _ L _ _ : 1/10000 of a unit is called ?'
  },
  {
    word: 'HUNDRED',
    hint: '_ _ N _ _ _ _ : A metre has these many centimetres'
  },
  {
    word: 'DIAMETER',
    hint: '_ _ A _ _ T _ _ : the longest line in a circle is called ?'
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
