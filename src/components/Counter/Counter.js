import React from 'react';
import './Counter.scss';
import { useData } from '../../contexts/DataContext';

const Counter = () => {
  const { count, increment, decrement } = useData();

  return (
    <div className='counter'>
      <h1 className='counter_title'>Counter</h1>
      <p className='counter_value'>{count}</p>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
    </div>
  );
};

export default Counter;
