import React from 'react';
import { storiesOf } from '@storybook/react';
import { useStore } from '@l8n/hooks';

storiesOf('Hooks|useStore', module)
  .add('Simple', () => {
    const { state, set, get } = useStore({
      name: 'lencx',
      age: 25,
      count: 0,
    });
    return (
      <div>
        <p>Name: {state.name}</p>
        <p>Age: {get('age')}</p>
        <button onClick={() => set('count', state.count + 1)}>
          Click Me: {get('count')}
        </button>
      </div>
    );
  })
  .add('Deep Object', () => {
    const { state, set, get } = useStore({
      userInfo: {
        name: 'lencx',
        age: 25,
      }
    });
    // key, value
    const agePlusOne = () => set('userInfo.age', state.userInfo.age + 1);
    // object
    const ageMinusOne = () => set({ 'userInfo.age': state.userInfo.age - 1 });
    return (
      <div>
        <p>Name: {state.userInfo.name}</p>
        <p>Age: {get('userInfo.age')}</p>
        <button
          onClick={agePlusOne}>Age+</button>
        <button onClick={ageMinusOne}>Age-</button>
      </div>
    );
  });