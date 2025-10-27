import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  Briefcase,
  BookOpen,
  FileText,
  MessageSquare,
  Settings,
  LogOut,
  ChevronDown,
  ChevronUp,
  Menu,
} from "lucide-react";
import "../Style/StudentSidebar.css"; // Reuse the same CSS file

const AdminNavbar = () => {
  const [expanded, setExpanded] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <aside className={`sidebar ${expanded ? "expanded" : "collapsed"}`}>
      {/* Sidebar Top */}
      <div className="sidebar-top">
        <div className="sidebar-logo">
          <img
            src="/logo192.png"
            alt="Admin Logo"
            className="logo"
            style={{ width: "40px", height: "40px" }}
          />
          {expanded && <h2 className="sidebar-title">Admin Panel</h2>}
        </div>
        <button className="menu-btn" onClick={() => setExpanded(!expanded)}>
          <Menu size={22} />
        </button>
      </div>

      {/* Sidebar Navigation */}
      <nav className="sidebar-nav">
        <Link
          to="/admin/dashboard"
          className={`nav-link ${location.pathname === "/admin/dashboard" ? "active" : ""}`}
        >
          <LayoutDashboard size={20} />
          {expanded && <span>Dashboard</span>}
        </Link>

        <Link
          to="/admin/users"
          className={`nav-link ${location.pathname === "/admin/users" ? "active" : ""}`}
        >
          <Users size={20} />
          {expanded && <span>Users</span>}
        </Link>

        {/* Event Dropdown */}
        <button
          className={`dropdown-btn ${openDropdown === "events" ? "active" : ""}`}
          onClick={() => toggleDropdown("events")}
        >
          <CalendarDays size={20} />
          {expanded && (
            <>
              <span>Events</span>
              {openDropdown === "events" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </>
          )}
        </button>
        {openDropdown === "events" && expanded && (
          <div className="dropdown-content">
            <Link to="/admin/events" className="submenu-link">All Events</Link>
            <Link to="/admin/event-requests" className="submenu-link">Event Requests</Link>
          </div>
        )}

        {/* Internship Dropdown */}
        <button
          className={`dropdown-btn ${openDropdown === "internships" ? "active" : ""}`}
          onClick={() => toggleDropdown("internships")}
        >
          <Briefcase size={20} />
          {expanded && (
            <>
              <span>Internships</span>
              {openDropdown === "internships" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </>
          )}
        </button>
        {openDropdown === "internships" && expanded && (
          <div className="dropdown-content">
            <Link to="/admin/internships" className="submenu-link">All Internships</Link>
            <Link to="/admin/internship-reports" className="submenu-link">Weekly Reports</Link>
          </div>
        )}

        {/* Workshop */}
        <Link
          to="/admin/workshops"
          className={`nav-link ${location.pathname === "/admin/workshops" ? "active" : ""}`}
        >
          <BookOpen size={20} />
          {expanded && <span>Workshops</span>}
        </Link>

        {/* Reports */}
        <Link
          to="/admin/reports"
          className={`nav-link ${location.pathname === "/admin/reports" ? "active" : ""}`}
        >
          <FileText size={20} />
          {expanded && <span>Reports</span>}
        </Link>

        {/* Feedback */}
        <Link
          to="/admin/feedback"
          className={`nav-link ${location.pathname === "/admin/feedback" ? "active" : ""}`}
        >
          <MessageSquare size={20} />
          {expanded && <span>Feedback</span>}
        </Link>

        {/* Settings */}
        <Link
          to="/admin/settings"
          className={`nav-link ${location.pathname === "/admin/settings" ? "active" : ""}`}
        >
          <Settings size={20} />
          {expanded && <span>Settings</span>}
        </Link>
      </nav>

      {/* Logout Section */}
      <div style={{ marginTop: "auto", padding: "10px" }}>
        <Link to="/logout" className="nav-link logout-link">
          <LogOut size={20} />
          {expanded && <span>Logout</span>}
        </Link>
      </div>
    </aside>
  );
};

export default AdminNavbar;
