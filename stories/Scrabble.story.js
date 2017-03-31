import React from 'react';
import {storiesOf, action} from '@kadira/storybook';

import {Board} from '../src';

export const data = [
  {
    word: 'FAR',
    hint: '3 letter word that means not so close'
  },
  {
    word: 'PERIODIC',
    hint: '8 letter word, your timetable has this'
  },
  {
    word: 'KILOMETRE',
    hint: '10 letter word, distance between two cities is represented by this word'
  },
  {
    word: 'TIME',
    hint: '4 letter word, waste this and you can never get it back'
  },
  {
    word: 'PARALLAX',
    hint: '10 letter word, avoid this error to take measurements correctly'
  },
  {
    word: 'RANDOM',
    hint: '6 letter word, never happens as we predict'
  },
  {
    word: 'MOTION',
    hint: '6 letter word, the act of movement or change in position of an object'
  },
  {
    word: 'REST',
    hint: '4 letter word, when it never moves'
  },
  {
    word: 'TRUCK',
    hint: '5 letter word, can move goods from one city to another'
  },
  {
    word: 'INCH',
    hint: '4 letter word, your height is mostly told in this'
  },
  {
    word: 'MEASURE',
    hint: '7 letter word, the act of calculating the size or amount of something'
  }
]

storiesOf('react-scrabble', module)
  .add('default', () => {
    return <Board data={data}/>
  });
