import React from "react";
import useCounter from "../../hooks/useCounter";

function CounterTwo() {
  const [count, increment, decrement, reset] = useCounter(20 ,20);

  return (
    <div>
      <h2> count {count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrment</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default CounterTwo;
