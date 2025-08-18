import axios from "axios";
import React, { useEffect, useState } from "react";

function Manager() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/users");
  });
  return (
    <div>
      Manage
      <h1></h1>r
    </div>
  );
}

export default Manager;
