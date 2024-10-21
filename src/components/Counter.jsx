import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="counter-container">
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>
      <div className="button-container">
        <button onClick={handleIncrement} disabled={count === 5 ? true : false}>
          +
        </button>
        <button onClick={handleReset}>0</button>
        <button onClick={handleDecrement} disabled={count === 0 ? true : false}>
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
