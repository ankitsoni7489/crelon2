import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentSidebar from "./DashboardNavbar";
import "../Style/StudentPortfolioForm.css"

function StudentPortfolioForm() {
  const [form, setForm] = useState({
    username: "",
    fullName: "",
    email: "",
    phone: "",
    headline: "",
    about: "",
    education: [],
    experience: [],
    skills: "",
    projects: [],
  });
  const token = localStorage.getItem("token");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/portfolio", form, {
      headers: { Authorization: `Bearer ${token}` },
    });
    alert("Portfolio Saved!");
  };

  return (
    <div className="dashboard-container">
      <StudentSidebar />
      <main className="main-content">
        <h1>Create Your Portfolio</h1>
        <form onSubmit={handleSubmit} className="portfolio-form">
          <input name="username" placeholder="Custom username (e.g. ankitsoni)" onChange={handleChange} required />
          <input name="fullName" placeholder="Full Name" onChange={handleChange} />
          <input name="email" placeholder="Email" onChange={handleChange} />
          <input name="phone" placeholder="Phone" onChange={handleChange} />
          <textarea name="about" placeholder="About Yourself" onChange={handleChange}></textarea>
          <input name="skills" placeholder="Skills (comma separated)" onChange={handleChange} />
          <button type="submit">Save Portfolio</button>
        </form>
      </main>
    </div>
  );
}

export default StudentPortfolioForm;
