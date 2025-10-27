import React, { useEffect, useState } from "react";
import axios from "axios";

function CreateUser() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", contact: "", password: "", role: "mentor" });

  const token = localStorage.getItem("token"); // JWT token

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/auth/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Create mentor/member
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/api/auth/create-user",
        form,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert(`${form.role} created successfully`);
      setForm({ name: "", email: "", contact: "", password: "", role: "mentor" });
      fetchUsers();
    } catch (err) {
      alert(err.response?.data?.msg || "Error creating user");
    }
  };

  // Update user role
  const updateRole = async (id, role) => {
    try {
      await axios.put(
        `http://localhost:5000/api/users/${id}/role`,
        { role },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Role updated successfully");
      fetchUsers();
    } catch (err) {
      alert(err.response?.data?.msg || "Error updating role");
    }
  };

  // Delete user
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("User deleted successfully");
      fetchUsers();
    } catch (err) {
      alert(err.response?.data?.msg || "Error deleting user");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Dashboard</h1>

      {/* Create Mentor/Member */}
      <form onSubmit={handleCreate} style={{ marginBottom: "30px" }}>
        <h2>Create User</h2>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          placeholder="Contact"
          value={form.contact}
          onChange={(e) => setForm({ ...form, contact: e.target.value })}
          required
        />
        <input
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>
          <option value="mentor">Mentor</option>
          <option value="member">Member</option>
        </select>
        <button type="submit">Create User</button>
      </form>

      {/* Users Table */}
      <h2>All Users</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Role</th>
            <th>Assign Role</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.contact}</td>
              <td>{user.role || "student"}</td>
              <td>
                <select
                  value={user.role || ""}
                  onChange={(e) => updateRole(user._id, e.target.value)}
                >
                  <option value="">student</option>
                  <option value="mentor">mentor</option>
                  <option value="member">member</option>
                  <option value="admin">admin</option>
                </select>
              </td>
              <td>
                <button onClick={() => deleteUser(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CreateUser;
