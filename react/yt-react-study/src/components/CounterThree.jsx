import React, { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "dec":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function CounterThree() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <h1> count {count}</h1>
      <button onClick={() => dispatch("increment")}>inc</button>
      <button onClick={() => dispatch("dec")}>dec</button>
      <button onClick={() => dispatch("reset")}>reset</button>
      <div>
        <h1> count {countTwo}</h1>
        <button onClick={() => dispatchTwo("increment")}>inc</button>
        <button onClick={() => dispatchTwo("dec")}>dec</button>
        <button onClick={() => dispatchTwo("reset")}>reset</button>
      </div>
    </div>
  );
}

export default CounterThree;
