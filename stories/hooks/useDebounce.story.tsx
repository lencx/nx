import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { useDebounce } from '@hooks';

storiesOf('Hooks|useDebounce', module)
  .add('Simple', () => {
    const [searchTerm, setSearchTerm] = useState('');
    useDebounce({
      payload: searchTerm,
      initCall: true, // initial callback
      callback(data) {
        console.log('fetch api:', data);
      },
    }, 2000);
    return (
      <input type="text" onChange={e => setSearchTerm(e.target.value)} />
    )
  })
  .add('Mulit Fields', () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [language, setLanguage] = useState('js');
    useDebounce({
      initCall: false,
      payload: {
        query: searchTerm,
        language,
      },
      callback(data) {
        console.log('fetch api:', data);
      },
    }, 2000);
    return (
      <>
        <select onChange={e => setLanguage(e.target.value)}>
          <option value="js">JS</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
        </select>
        <input type="text" onChange={e => setSearchTerm(e.target.value)} />
      </>
    )
  });