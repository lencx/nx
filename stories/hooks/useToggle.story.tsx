import React from 'react';
import { storiesOf } from '@storybook/react';
import { useToggle } from '@hooks';

storiesOf('Hooks|useToggle', module)
  .add('Simple', () => {
    const [status, toggle] = useToggle(false);
    return <button onClick={toggle as any}>toggle-{`${status}`}</button>
  });