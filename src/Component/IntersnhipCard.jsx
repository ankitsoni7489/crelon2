import React from "react";
// import "../Style/InternshipCard.css";
import "../Style/Internship.css"

function InternshipCard({
  image,
  title,
  company,
  location,
  duration,
  type,
  stipend,
  onApply,
  isApplied = false,
}) {
  return (
    <div className="internship-card">
      <div
        className="intern-img"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <div className="internship-content">
        <h3>{title}</h3>
        <p>{company}</p>
        <p><i className="fi fi-br-marker"></i> {location}</p>
        <p><i className="fi fi-br-clock"></i> {duration}</p>
        

        {type === "free" ? (
          <p className="internship-type free">Free Internship</p>
        ) : (
          <p className="internship-type stipend">Stipend: ₹{stipend}/month</p>
        )}

        <button
            className={isApplied ? "applied-btn" : "apply-btn"}
            onClick={!isApplied ? onApply : null}
            disabled={isApplied}
        >
  {isApplied ? "Applied" : "Apply Now →"}
</button>

      </div>
    </div>
  );
}

export default InternshipCard;
