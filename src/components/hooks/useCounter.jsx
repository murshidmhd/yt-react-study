import { useState } from "react";
function useCounter(initialValue = 0 , value) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount((pr) => pr + value);
  const decrment = () => setCount((pr) => pr - value);
  const reset = () => setCount(0);
  return [count, increment, decrment, reset];
}

export default useCounter;
