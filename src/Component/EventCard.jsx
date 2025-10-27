import React from "react";
import "../Style/EventCard.css";

function EventCard({
  image,
  title,
  description,
  date,
  location,
  spots,
  button,
  onClick, // add onClick handler
}) {
  return (
    <div className="event-card">
      {/* Event image */}
      <div
        className="event-img"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Event details */}
      <div className="event-details">
        <div className="event-title">{title}</div>
        <div className="event-description">{description}</div>

        <div className="event-meta">
          <span>
            <i className="fi fi-br-calendar"></i> {date}
          </span>
          <span>
            <i className="fi fi-br-marker"></i> {location || "TBA"}
          </span>
          <span>
            <i className="fi fi-br-users-alt"></i> {spots}
          </span>
        </div>

        <div className="event-button-row">
          <button className="register-btn" onClick={onClick}>
            {button} <span>&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
