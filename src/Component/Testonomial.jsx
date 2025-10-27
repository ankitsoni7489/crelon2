import React from "react";
import "../Style/Testinomial.css";

const testimonials = [
  {
    quote: "Great Work!",
    text: "Our office is something we are pleased with. We consider it the little magnet; it is wanting.",
    name: "HAROLD NEWMAN",
    title: "Client of Company",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote: "It is Working!",
    text: "Our office is something we are pleased with. We consider it the little magnet; it is wanting.",
    name: "ANNA SCOTT",
    title: "Client of Company",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote: "Perfect Courses!",
    text: "Our office is something we are pleased with. We consider it the little magnet; it is wanting.",
    name: "KATTY WILLIAMS",
    title: "Client of Company",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    quote: "Amazing Support!",
    text: "The team helped us launch quickly and the onboarding was so easy. Recommend highly.",
    name: "LOGAN SMITH",
    title: "Manager, Organization",
    img: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    quote: "Super Flexible",
    text: "We were able to scale and adapt our workflow easily thanks to this platform.",
    name: "EMILY TURNER",
    title: "Lead Developer",
    img: "https://randomuser.me/api/portraits/women/25.jpg",
  },
  {
    quote: "Game Changer",
    text: "It has changed how we organize & communicate in our team—so much smoother now.",
    name: "MARK BROWN",
    title: "CTO, Startup",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

function Testimonial() {
  return (
    <div className="testimonials-section">
      <div className="testimonials-sidebar">
        <div className="testimonials-label">TESTIMONIALS</div>
        <h2>
          What Our <br />
          Students Have <br />
          To Say
        </h2>
        <p>
          Over 2200+ members trust Ureg <br />to power up their careers.
        </p>
        <button className="btn">VIEW MORE</button>
      </div>
      <div className="testimonials-cards">
        {testimonials.slice(0, 3).map((testimonial, idx) => (
          <TestimonialCard key={idx} {...testimonial} />
        ))}
      </div>
    </div>
  );
}

function TestimonialCard({ quote, text, name, title, img }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-icon">❝❞</div>
      <div className="testimonial-quote">{quote}</div>
      <div className="testimonial-text">“{text}”</div>
      <div className="testimonial-user">
        <img src={img} alt={name} className="testimonial-avatar" />
        <div>
          <div className="testimonial-user-name">{name}</div>
          <div className="testimonial-user-title">{title}</div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
