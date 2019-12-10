import React from 'react';
import { storiesOf } from '@storybook/react';
import { useDebounce } from '@hooks';

storiesOf('Hooks|useDebounce', module)
  .add('Simple', () => {
    const { payload, setPayload } = useDebounce({
      initCall: true, // initial callback
      payload: 'test', // initial value
      callback(data) {
        console.log('fetch api:', data);
      },
    }, 2000);
    return (
      <input value={payload} type="text" onChange={e => setPayload(e.target.value)} />
    )
  })
  .add('Mulit Fields', () => {
    const { payload, setPayload } = useDebounce({
      // initCall: true,
      payload: {
        language: 'html',
      },
      callback(data) {
        console.log('fetch api:', data);
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
      </>
    )
  });