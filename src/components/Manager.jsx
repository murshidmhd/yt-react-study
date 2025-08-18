import axios from "axios";
import React, { useEffect, useState } from "react";

function Manager() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch(() => {
        console.log("error message");
      });
  }, []);
  return (
    <div>
      <ul>
        {users.map((user) => {
          return <li key={user.id}> {user.name}</li>;
        })}
      </ul>
      <h1></h1>
    </div>
  );
}

export default Manager;
