import React from "react";
import useCounter from "../../hooks/useCounter";
function CounterOne() {
  const [count, increment, decrement, reset] = useCounter(1000 , 1 );

  return (
    <div>
      <h2> count {count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrment</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default CounterOne;
