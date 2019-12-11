import React from 'react';
import { storiesOf } from '@storybook/react';
import { useToggle } from '@l8n/hooks';

storiesOf('Hooks|useToggle', module)
  .add('Simple', () => {
    const [status, toggle] = useToggle(false);
    return <button onClick={toggle}>toggle-{`${status}`}</button>
  });