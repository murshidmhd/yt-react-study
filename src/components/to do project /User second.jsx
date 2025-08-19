import React, { useEffect, useState } from "react";
import axios from "axios";

const LIMIT = 5; // Number of users per page

function UserManager() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Add user
  const [newName, setNewName] = useState("");

  // Edit user
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");

  // Fetch users (paginated)
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/users?_page=${currentPage}&_limit=${LIMIT}`)
      .then((res) => {
        setUsers(res.data);
        setTotalUsers(Number(res.headers["x-total-count"]));
        setError("");
      })
      .catch(() => setError("Failed to load users"))
      .finally(() => setLoading(false));
  }, [currentPage]);

  // Add User
  const addUser = async () => {
    if (!newName.trim()) return;
    setLoading(true);
    await axios
      .post("http://localhost:3000/users", { name: newName })
      .then(() => {
        setNewName("");
        // Go to last page to see the newly added user
        axios
          .get(`http://localhost:3000/users?_page=${Math.ceil((totalUsers + 1)/LIMIT)}&_limit=${LIMIT}`)
          .then((res) => {
            setUsers(res.data);
            setCurrentPage(Math.ceil((totalUsers + 1)/LIMIT));
            setTotalUsers(Number(res.headers["x-total-count"]));
          });
      })
      .catch(() => setError("Failed to add user"))
      .finally(() => setLoading(false));
  };

  // Delete User
  const deleteUser = async (id) => {
    setLoading(true);
    await axios
      .delete(`http://localhost:3000/users/${id}`)
      .then(() => {
        // Refresh current page
        axios
          .get(`http://localhost:3000/users?_page=${currentPage}&_limit=${LIMIT}`)
          .then((res) => {
            setUsers(res.data);
            setTotalUsers(Number(res.headers["x-total-count"]));
          });
      })
      .catch(() => setError("Failed to delete user"))
      .finally(() => setLoading(false));
  };

  // Start Edit
  const startEdit = (id, name) => {
    setEditId(id);
    setEditName(name);
  };

  // Save Edit
  const saveEdit = async (id) => {
    setLoading(true);
    await axios
      .patch(`http://localhost:3000/users/${id}`, { name: editName })
      .then(() => {
        setEditId(null);
        setEditName("");
        // Refresh current page
        axios
          .get(`http://localhost:3000/users?_page=${currentPage}&_limit=${LIMIT}`)
          .then((res) => {
            setUsers(res.data);
            setTotalUsers(Number(res.headers["x-total-count"]));
          });
      })
      .catch(() => setError("Failed to edit user"))
      .finally(() => setLoading(false));
  };

  // Pagination controls
  const totalPages = Math.ceil(totalUsers / LIMIT);
  const prevDisabled = currentPage === 1;
  const nextDisabled = currentPage === totalPages || totalPages === 0;

  return (
    <div>
      <h1>User Manager</h1>
      <div>
        <input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="New user name"
        />
        <button onClick={addUser}>Add User</button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p style={{color:'red'}}>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {editId === user.id ? (
              <>
                <input
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <button onClick={() => saveEdit(user.id)}>Save</button>
                <button onClick={() => setEditId(null)}>Cancel</button>
              </>
            ) : (
              <>
                {user.name}{" "}
                <button onClick={() => startEdit(user.id, user.name)}>
                  Edit
                </button>
                <button onClick={() => deleteUser(user.id)}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
      <button disabled={prevDisabled} onClick={() => setCurrentPage(p => p-1)}>
        Previous
      </button>
      <span style={{margin: "0 15px"}}>Page {currentPage} of {totalPages}</span>
      <button disabled={nextDisabled} onClick={() => setCurrentPage(p => p+1)}>
        Next
      </button>
    </div>
  );
}

export default UserManager;
