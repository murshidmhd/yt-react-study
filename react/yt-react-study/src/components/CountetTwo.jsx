import React, { useReducer } from "react";
const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decriment":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decriment2":
      return { ...state, secondCounter: state.secondCounter - action.value };

    case "reset":
      return initialState;
    default:
      return state;
  }
};
function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1> firstCounter {count.firstCounter}</h1>
      <h1> secondCounter : {count.secondCounter}</h1>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        inc
      </button>
      <button onClick={() => dispatch({ type: "decriment", value: 1 })}>
        dec
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        inc 5
      </button>
      <button onClick={() => dispatch({ type: "decriment", value: 5 })}>
        dec 5
      </button>
      <div>
        <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
          inc
        </button>
        <button onClick={() => dispatch({ type: "decriment2", value: 1 })}>
          dec
        </button>
      </div>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
}

export default CounterTwo;
