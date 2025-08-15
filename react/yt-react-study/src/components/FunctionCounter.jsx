import { useState } from "react";

function FunctionCounter() {
  const [count, setCount] = useState(5);
  function inc() {
    setCount((pr) => pr + 1);
  }
  return (
    <>
      <button onClick={inc}> add {count}</button>
    </>
  );
}

export default FunctionCounter;
