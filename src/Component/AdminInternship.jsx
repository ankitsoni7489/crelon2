import React, { useState, useEffect } from "react";
import axios from "axios";
// import "../style/AdminInternships.css";
import StudentSidebar from "./DashboardNavbar";

function AdminInternships() {
  const [internships, setInternships] = useState([]);
  const [form, setForm] = useState({ title: "", company: "", description: "", duration: "", location: "", type: "free", stipend: 0 });
  const [image, setImage] = useState(null);
  const token = localStorage.getItem("token");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  

  const fetchInternships = async () => {
    const { data } = await axios.get("http://localhost:5000/api/internships", { headers: { Authorization: `Bearer ${token}` } });
    setInternships(data);
  };

  useEffect(() => { fetchInternships(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    Object.keys(form).forEach(k => fd.append(k, form[k]));
    if (image) fd.append("image", image);

    await axios.post("http://localhost:5000/api/internships", fd, {
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
    });
    setForm({ title: "", company: "", description: "", duration: "", location: "", type: "free", stipend: 0 });
    fetchInternships();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/internships/${id}`, { headers: { Authorization: `Bearer ${token}` } });
    fetchInternships();
  };

  return (
    <div className="dashboard-container">
      <StudentSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
          <main className={`main-content ${isSidebarOpen ? "" : "collapsed"}`}>
        <h1>Manage Internships</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Title" value={form.title} onChange={e => setForm({...form, title:e.target.value})}/>
        <input placeholder="Company" value={form.company} onChange={e => setForm({...form, company:e.target.value})}/>
        <textarea placeholder="Description" value={form.description} onChange={e => setForm({...form, description:e.target.value})}/>
        <input placeholder="Duration" value={form.duration} onChange={e => setForm({...form, duration:e.target.value})}/>
        <input placeholder="Location" value={form.location} onChange={e => setForm({...form, location:e.target.value})}/>
        <select value={form.type} onChange={e => setForm({...form, type:e.target.value})}>
          <option value="free">Free</option>
          <option value="stipend">Stipend</option>
        </select>
        {form.type === "stipend" && <input type="number" placeholder="Stipend amount" value={form.stipend} onChange={e => setForm({...form, stipend:e.target.value})}/>}
        <input type="file" onChange={e => setImage(e.target.files[0])}/>
        <button type="submit">Create Internship</button>
      </form>
      <hr/>
      {internships.map((i) => (
        
              
               
              
        <div key={i._id} className="internship-item">
           <img
                  src={`http://localhost:5000${i.image}`}
                  alt={i.title}
                  width="180"
                />
          <h3>{i.title}</h3>
          <p>{i.company}</p>
          <p>{i.type === "free" ? "Free" : `Stipend ₹${i.stipend}`}</p>
          <p>Total Registered: {i.applicants?.length}</p>
          <button onClick={() => handleDelete(i._id)}>Delete</button>
        </div>
      ))}
      </main>
    </div>
  );
}

export default AdminInternships;
