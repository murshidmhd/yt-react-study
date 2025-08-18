import { useState } from "react";
import { First } from "react-bootstrap/esm/PageItem";

function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name , firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h2> your first name is -{name.firstName}</h2>
      <h2> your first name is -{name.lastName}</h2>
      <h2>{JSON.stringify(name)} </h2>
    </>
  );
}

export default HookCounterThree;
