import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { useDebounce } from '@hooks';

storiesOf('Hooks|useDebounce', module)
  .add('Simple', () => {
    const [searchTerm, setSearchTerm] = useState('');
    const debounceSearchTerm = useDebounce({
      payload: searchTerm,
      callback(data) {
        console.log('fetch api:', data);
      }
    }, 1000);
    return (
      <>
        <input type="text" onChange={e => setSearchTerm(e.target.value)} />
        <p>search: {debounceSearchTerm}</p>
      </>
    )
  });