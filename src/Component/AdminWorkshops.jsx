import React, { useEffect, useState } from "react";
import axios from "axios";
// import "../Style/AdminWorkshops.css";

function AdminWorkshops() {
  const [workshops, setWorkshops] = useState([]);
  const [form, setForm] = useState({
    title: "",
    trainer: "",
    description: "",
    date: "",
    location: "",
    type: "free",
    price: 0,
  });
  const [image, setImage] = useState(null);
  const token = localStorage.getItem("token");

  // Fetch all workshops
  const fetchWorkshops = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/workshops");
      setWorkshops(data);
    } catch (error) {
      console.error("Error fetching workshops:", error);
    }
  };

  // On page load
  useEffect(() => {
    fetchWorkshops();
  }, []);

  // Create new workshop
  const handleCreate = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    Object.keys(form).forEach((key) => fd.append(key, form[key]));
    if (image) fd.append("image", image);

    try {
      await axios.post("http://localhost:5000/api/workshops", fd, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("✅ Workshop created successfully!");
      setForm({
        title: "",
        trainer: "",
        description: "",
        date: "",
        location: "",
        type: "free",
        price: 0,
      });
      setImage(null);
      fetchWorkshops();
    } catch (err) {
      console.error("Error creating workshop:", err);
      alert(err.response?.data?.msg || "Failed to create workshop.");
    }
  };

  // Delete workshop
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this workshop?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/workshops/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("🗑️ Workshop deleted");
      fetchWorkshops();
    } catch (err) {
      console.error("Error deleting:", err);
      alert("Error deleting workshop");
    }
  };

  return (
    <div className="admin-workshops">
      <h1>Admin Workshop Management</h1>

      {/* Workshop Creation Form */}
      <form className="workshop-form" onSubmit={handleCreate}>
        <h2>Create New Workshop</h2>
        <input
          type="text"
          placeholder="Workshop Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Trainer Name"
          value={form.trainer}
          onChange={(e) => setForm({ ...form, trainer: e.target.value })}
          required
        />
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        />
        <select
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        >
          <option value="free">Free</option>
          <option value="paid">Paid</option>
        </select>
        {form.type === "paid" && (
          <input
            type="number"
            placeholder="Price (₹)"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />
        )}
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button type="submit">Create Workshop</button>
      </form>

      {/* Existing Workshops */}
      <h2>Existing Workshops</h2>
      <div className="workshop-list">
        {workshops.map((w) => (
          <div key={w._id} className="workshop-item">
            <div className="workshop-thumb">
              {w.image ? (
                <img
                  src={`http://localhost:5000${w.image}`}
                  alt={w.title}
                  width="180"
                />
              ) : (
                <div className="placeholder">No Image</div>
              )}
            </div>
            <div className="workshop-info">
              <h3>{w.title}</h3>
              <p>
                <strong>Trainer:</strong> {w.trainer}
              </p>
              <p>
                <strong>Date:</strong>{" "}
                {w.date ? new Date(w.date).toLocaleDateString() : "N/A"}
              </p>
              <p>
                <strong>Type:</strong> {w.type}{" "}
                {w.type === "paid" && `(₹${w.price})`}
              </p>
              <p>
                <strong>Location:</strong> {w.location || "Online"}
              </p>
              <p>
                <strong>Registered:</strong>{" "}
                {w.registeredStudents?.length || 0} Students
              </p>
              <button
                className="delete-btn"
                onClick={() => handleDelete(w._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminWorkshops;
