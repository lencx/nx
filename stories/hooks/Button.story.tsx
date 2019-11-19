import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@hooks';

storiesOf('Base|Button', module)
  .add('Simple', () => <Button text="Test 😎" />);