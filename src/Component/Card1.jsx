import React from "react";
import "../Style/card1.css";

function Card1({ title_card1, description_card1, icon_card1, gradient_card1 }) {
  return (
    <div className="card1">
      <div className="icon-box" style={{ background: gradient_card1 }}>
        {icon_card1}
      </div>
      <div className="text-box">
        <h3>{title_card1}</h3>
        <p>{description_card1}</p>
      </div>
    </div>
  );
}

export default Card1;
