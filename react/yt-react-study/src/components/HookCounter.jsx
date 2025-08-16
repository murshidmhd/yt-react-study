import { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);
  function incFive() {
    for (let i = 0; i < 5; i++) {
      setCount((prv) => prv + 1);
    }
  }

  return (
    <>
      <h1> count {count} </h1>
      <button onClick={() => setCount((prv) => prv + 1)}>inc</button>
      <button onClick={() => setCount((prv) => prv - 1)}>dec</button>
      <button onClick={() => setCount(0)}>reset</button>
      <button onClick={incFive}> inc 5</button>
      <button> </button>
    </>
  );
}

export default HookCounter;
