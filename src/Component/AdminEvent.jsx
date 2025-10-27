import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminEvents() {
  const [events, setEvents] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [form, setForm] = useState({
    title: "", description: "", date: "", location: "", type: "free", price: 0, mentor: ""
  });
  const [image, setImage] = useState(null);
  const token = localStorage.getItem("token");

  const fetchEvents = async () => {
    const { data } = await axios.get("http://localhost:5000/api/events", {
      headers: { Authorization: `Bearer ${token}` }
    });
    setEvents(data);
  };

  const fetchMentors = async () => {
    const { data } = await axios.get("http://localhost:5000/api/users/mentors", {
      headers: { Authorization: `Bearer ${token}` }
    });
    setMentors(data);
  };

  useEffect(() => {
    fetchEvents();
    fetchMentors();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(form).forEach(key => formData.append(key, form[key]));
    if (image) formData.append("image", image);

    try {
      await axios.post("http://localhost:5000/api/events", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        }
      });
      setForm({ title: "", description: "", date: "", location: "", type: "free", price: 0, mentor: "" });
      setImage(null);
      fetchEvents();
    } catch (err) {
      alert(err.response?.data?.msg || "Error creating event");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this event?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/events/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchEvents();
    } catch (err) {
      alert(err.response?.data?.msg || "Error deleting event");
    }
  };

  return (
    <div>
      <h1>Admin Event Management</h1>

      <form onSubmit={handleCreate}>
        <input placeholder="Title" value={form.title} onChange={e => setForm({...form, title: e.target.value})} required />
        <input placeholder="Description" value={form.description} onChange={e => setForm({...form, description: e.target.value})} />
        <input type="date" value={form.date} onChange={e => setForm({...form, date: e.target.value})} required />
        <input placeholder="Location" value={form.location} onChange={e => setForm({...form, location: e.target.value})} />
        <select value={form.type} onChange={e => setForm({...form, type: e.target.value})}>
          <option value="free">Free</option>
          <option value="paid">Paid</option>
        </select>
        {form.type === "paid" && <input type="number" placeholder="Price" value={form.price} onChange={e => setForm({...form, price: e.target.value})} />}
        <select value={form.mentor} onChange={e => setForm({...form, mentor: e.target.value})}>
          <option value="">Select Mentor</option>
          {mentors.map(m => <option key={m._id} value={m._id}>{m.name}</option>)}
        </select>
        <input type="file" onChange={e => setImage(e.target.files[0])} />
        <button type="submit">Create Event</button>
      </form>

      <h2>All Events</h2>
      {events.map(ev => (
        <div key={ev._id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h3>{ev.title}</h3>
          {ev.image && <img src={`http://localhost:5000${ev.image}`} alt={ev.title} width="200" />}
          <p>{ev.description}</p>
          <p>Date: {new Date(ev.date).toLocaleDateString()}</p>
          <p>Type: {ev.type} {ev.type === "paid" && `($${ev.price})`}</p>
          <p>Mentor: {ev.mentor?.name}</p>
          <p>Total Registered: {ev.registeredStudents?.length}</p>
          <button onClick={() => handleDelete(ev._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default AdminEvents;
