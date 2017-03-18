import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import { Board } from '../src';

storiesOf('react-scrabble', module)
  .add('default', () => (
    <Board/>
  ));
