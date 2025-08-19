import axios from "axios";
import React, { useEffect, useState } from "react";

function Manager() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [newName, setNewName] = useState();
  const [editId, setEditId] = useState();
  const [editedName, setEditedName] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(() => {
        console.log("error message");
        setError("error occuerred");
        setLoading(false);
      });
  }, []);

  const handleAdd = () => {
    if (!newName) return;
    setLoading(true);
    axios.post("http://localhost:3000/users", { name: newName }).then(() => {
      setNewName("");
    });
    return axios
      .get("http://localhost:3000/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("failed to add user");
        setLoading(false);
      });
  };

  const handleDlt = (id) => {
    setLoading(true);
    axios.delete(`http://localhost:3000/users/${id}`).then(() => {
      axios
        .get("http://localhost:3000/users")
        .then((res) => {
          setUsers(res.data);
          setLoading(false);
        })
        .catch(() => {
          setError("failed to dlt");
          setLoading(false);
        });
    });
  };

  const handleEditSave = () => {
    axios("http://localhost:3000/users");
  };
  return (
    <div>
      {loading && <h1> loading......</h1>}
      {error && <h1>error.....</h1>}
      <input
        onChange={(e) => {
          setNewName(e.target.value);
        
        }}
      />
      <button onClick={handleAdd}>add</button>
      <ul>
        {users.map((user) => (
          <>
            <li key={user.id}> {user.name}</li>
            <button onClick={() => handleDlt(user.id)}>dlt</button>
          </>
        ))}
      </ul>
      <h1>add you name </h1>
    </div>
  );
}

export default Manager;
