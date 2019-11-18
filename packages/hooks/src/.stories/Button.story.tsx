import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '..';

storiesOf('Base|Button', module)
  .add('Simple', () => <Button text="Test 😎" />);