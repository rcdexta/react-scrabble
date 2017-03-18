import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import { App } from '../components';

storiesOf('react-scrabble', module)
  .add('default', () => (
    <App onClick={action('clicked')}/>
  ));
