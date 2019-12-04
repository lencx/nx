import React, { useState, useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import { useDebounce } from '@hooks';

storiesOf('Hooks|useDebounce', module)
  .add('Simple', () => {
    const [searchTerm, setSearchTerm] = useState('');
    const debounceSearchTerm = useDebounce(searchTerm, 1000);
    useEffect(() => {
      if (debounceSearchTerm) {
        console.log('fetch api');
      }
    }, [debounceSearchTerm])
    return (
      <>
        <input type="text" onChange={e => setSearchTerm(e.target.value)} />
        <p>search: {debounceSearchTerm}</p>
      </>
    )
  });