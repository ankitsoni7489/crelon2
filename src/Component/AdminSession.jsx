import React, { useEffect, useState } from "react";
import axios from "axios";
// import "../Style/AdminSessions.css";

function AdminSessions() {
  const [sessions, setSessions] = useState([]);
  const [mentors, setMentors] = useState([]);
  const token = localStorage.getItem("token");

  const fetchSessions = async () => {
    const res = await axios.get("http://localhost:5000/api/sessions/all", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setSessions(res.data);
  };

  const fetchMentors = async () => {
    const res = await axios.get("http://localhost:5000/api/users/mentors", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setMentors(res.data);
  };

  useEffect(() => {
    fetchSessions();
    fetchMentors();
  }, []);

  const assignMentor = async (id, mentorId) => {
    await axios.put(
      `http://localhost:5000/api/sessions/${id}/assign`,
      { mentorId },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    fetchSessions();
  };

  const scheduleMeeting = async (id, time) => {
    await axios.put(
      `http://localhost:5000/api/sessions/${id}/schedule`,
      { time },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    fetchSessions();
  };

  return (
    <div className="admin-sessions">
      <h1>Manage Student Sessions</h1>
      <table className="session-table">
        <thead>
          <tr>
            <th>Student</th>
            <th>Topic</th>
            <th>Status</th>
            <th>Mentor</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((s) => (
            <tr key={s._id}>
              <td>{s.student?.name}</td>
              <td>{s.topic}</td>
              <td>{s.status}</td>
              <td>{s.mentor ? s.mentor.name : "Not Assigned"}</td>
              <td>
                {!s.mentor && (
                  <select onChange={(e) => assignMentor(s._id, e.target.value)}>
                    <option value="">Assign Mentor</option>
                    {mentors.map((m) => (
                      <option key={m._id} value={m._id}>
                        {m.name}
                      </option>
                    ))}
                  </select>
                )}
                {s.mentor && !s.scheduledTime && (
                  <input
                    type="datetime-local"
                    onBlur={(e) => scheduleMeeting(s._id, e.target.value)}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminSessions;
