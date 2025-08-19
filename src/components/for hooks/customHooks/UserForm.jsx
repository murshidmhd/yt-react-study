import React from "react";
import { useState } from "react";
import useInput from "../../hooks/useInput";
function UserForm() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  useInput();
  const submitHandler = (e) => {
    e.preventDefault();
    alert(`hello ${firstName} ${lastName}`);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label> First Name</label>
          <input
            value={firstName}
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label> Last Name</label>
          <input
            value={lastName}
            type="text"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <button>submit</button>
      </form>
    </div>
  );
}

export default UserForm;
