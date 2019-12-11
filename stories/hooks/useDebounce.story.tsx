import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { useDebounce } from '@l8n/hooks';

storiesOf('Hooks|useDebounce', module)
  .add('Simple', () => {
    const [showQuery, setQuery] = useState();
    const { payload, setPayload } = useDebounce({
      initCall: true, // initial callback
      payload: 'test', // initial value
      callback(data) {
        console.log('fetch api:', data);
        setQuery(data);
      },
    }, 2000);
    return (
      <>
        <input value={payload} type="text" onChange={e => setPayload(e.target.value)} />
        <p>query: {showQuery}</p>
      </>
    )
  })
  .add('Mulit Fields', () => {
    const [showQuery, setQuery] = useState('');
    const { payload, setPayload } = useDebounce({
      // initCall: true,
      payload: {
        language: 'html',
      },
      callback(data) {
        console.log('fetch api:', JSON.stringify(data));
        setQuery(JSON.stringify(data));
      },
    }, 2000);
    return (
      <>
        <select value={payload.language} onChange={e => setPayload({ language: e.target.value })}>
          <option value="js">JS</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
        </select>
        <input type="text" onChange={e => setPayload({ query: e.target.value })} />
        <p>query: {showQuery}</p>
      </>
    )
  });