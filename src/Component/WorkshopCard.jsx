import React from "react";
// import "../Style/WorkshopCard.css";
import "../Style/Workshop.css"

function WorkshopCard({
  image,
  title,
  trainer,
  location,
  date,
  type,
  price,
  onApply,
  isRegistered = false,
}) {
  return (
    <div className="workshop-card">
      <div
        className="workshop-img"
        style={{
          backgroundImage: `url(${image || "/default-workshop.jpg"})`,
        }}
      ></div>

      <div className="workshop-content">
        <h3>{title}</h3>
        <p className="workshop-trainer">
          <i className="fi fi-br-user"></i> {trainer}
        </p>
        <p className="workshop-location">
          <i className="fi fi-br-marker"></i> {location || "Online"}
        </p>
        <p className="workshop-date">
          <i className="fi fi-br-calendar"></i> {date}
        </p>

        {type === "free" ? (
          <p className="workshop-type free">Free Workshop</p>
        ) : (
          <p className="workshop-type paid">Paid Workshop — ₹{price}</p>
        )}

        <button
          className={isRegistered ? "registered-btn" : "apply-btn"}
          onClick={!isRegistered ? onApply : null}
          disabled={isRegistered}
        >
          {isRegistered ? "Registered" : "Apply Now →"}
        </button>
      </div>
    </div>
  );
}

export default WorkshopCard;
