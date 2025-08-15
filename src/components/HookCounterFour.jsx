import { useState } from "react";

function HookCounterFour() {
  const [items, setIems] = useState([]);
  return (
    <>
    <button onClick={}> add a number</button>
      <ul>
        {items.map((item) => {
          <li key={item.id}> {item.value} </li>;
        })}
      </ul>
    </>
  );
}

export default HookCounterFour;
