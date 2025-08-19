import React, { useEffect, useState } from "react";
import axios from "axios";
function User() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:3000/users?_page=${currentPage}&_limit=5`)
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
        setError("");
      })
      .catch(() => {
        setError("faild to load users");
        setLoading(false);
      });
  }, [currentPage]);
  return (
    <>
      <h1>User List (page {currentPage})</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((p) => p - 1)}
      >
        Previous
      </button>
      <button onClick={() => setCurrentPage((p) => p + 1)}>next</button>
    </>
  );
}

export default User;
