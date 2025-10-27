import React, { useState } from "react";
import "../Style/Program.css";
import Card1 from "../Component/Card1";
import EventsTabs from "../Component/EventTab";
import EventCard from "../Component/EventCard";
import { useOnScreen } from "../hooks/useOnScreen";
import ProgramHero from "../assets/program-hero-image.png"

const Program = () => {
  const [cardRef, cardVisible] = useOnScreen();
  
  const [activeTab, setActiveTab] = useState("All Events");

  return (
    <>
      {/* <div className="info-card-head">
        <div className="info-head">
          <div className="heading">
            <h1>Programs & </h1>
            <div className="content">
              <h1 className="title">
                Events
                <div className="aurora">
                  <div className="aurora__item"></div>
                  <div className="aurora__item"></div>
                  <div className="aurora__item"></div>
                  <div className="aurora__item"></div>
                </div>
              </h1>
            </div>
          </div>
          <p className="para">
            Immersive learning experiences designed to accelerate your growth and connect you with opportunities
          </p>
        </div>
      </div>
       */}
      <div className="program-hero">
            <div className="left-program-hero">
              <div className="heading-hero-program">
                <div>
                  <div className="sign"></div>
                  <p>Learn Something New</p>
                </div>
                <h1>Develop Your Skills and Advance <span>Your Career</span></h1>
                <p>Gain an internationally recognized digital marketing certification</p>
              </div>    
              <div className="btn-hero-program">
                <a href="#courses" className="btn">
                      Find Course
                </a>
                <button className="btn">Watch Previews</button>
              </div>
            </div>
            <div className="right-hero-program">
              <img src={ProgramHero} alt="ProgramHero" />
            </div>     
      </div>
      <div className="value-head">
        <h2>Our <span>Core Program</span></h2>
        <p>Multiple pathways to achieve your goals</p>
      </div>
      
      <div 
          ref={cardRef}
          className={`core-value-section ${cardVisible ? "visible" : ""}`}
      >
        <div className="core-value-card" id="box1">
            <div>
                <h1>Events & Workshops</h1>
                <button>Get More</button>
            </div>
        </div>
        <div className="core-value-card" id="box2">
            <div>
                <h1>Network & Connect</h1>
                <button>Get More</button>
            </div>
        </div>
        <div className="core-value-card" id="box3">
            <div>
                <h1>Real Experiences</h1>
                <button>Get More</button>
            </div>
        </div>
        <div className="core-value-card" id="box4">
            <div>
                <h1>Growth Launchpad</h1>
                <button>Get More</button>
            </div>
        </div>
    </div>


      <div className="value-head" id="courses">
        <h2>Upcoming <span>Events Calendar</span></h2>
        <p>Mark your calendar and join us for these exciting opportunities</p>
      </div>

      <EventsTabs onTabChange={setActiveTab} />

      <div className="event-containers">
        {activeTab === "All Events" && (
          <>
            <EventCard
              image="https://your-image-url.jpg"
              category="workshop"
              status="upcoming"
              title="Design Thinking Workshop"
              description="Master the art of design thinking and learn how to create user-centered solutions for complex problems."
              date="Dec 25, 2024"
              location="Design Studio, Floor 3"
              spots="15 / 25 spots"
              button="Register Now"
            />
            <EventCard
              image="https://your-hackathon-image-url.jpg"
              category="hackathon"
              status="upcoming"
              title="AI/ML Hackathon 2024"
              description="48-hour hackathon focused on building innovative AI and machine learning solutions for real-world problems."
              date="Dec 20, 2024"
              location="Innovation Center"
              spots="28 / 50 spots"
              button="Register Now"
            />
            <EventCard
              image="https://your-networking-image-url.jpg"
              category="networking"
              status="upcoming"
              title="Startup & Student Mixer"
              description="Network with innovative startups and talented students. Great opportunity to find collaborators and mentors."
              date="Dec 22, 2024"
              location="WeWork Downtown"
              spots="45 / 100 spots"
              button="Register Now"
            />
            <EventCard
              image="https://your-networking-image-url.jpg"
              category="networking"
              status="upcoming"
              title="Startup "
              description="Network with innovative startups and talented students. Great opportunity to find collaborators and mentors."
              date="Dec 22, 2024"
              location="WeWork Downtown"
              spots="45 / 100 spots"
              button="Register Now"
            />
            <EventCard
              image="https://your-networking-image-url.jpg"
              category="networking"
              status="upcoming"
              title="Networking"
              description="Network with innovative startups and talented students. Great opportunity to find collaborators and mentors."
              date="Dec 22, 2024"
              location="WeWork Downtown"
              spots="45 / 100 spots"
              button="Register Now"
            />
          </>
        )}

        {activeTab === "Workshops" && (
          <EventCard
            image="https://your-image-url.jpg"
            category="workshop"
            status="upcoming"
            title="Design Thinking Workshop"
            description="Master the art of design thinking and learn how to create user-centered solutions for complex problems."
            date="Dec 25, 2024"
            location="Design Studio, Floor 3"
            spots="15 / 25 spots"
            button="Register Now"
          />
        )}

        {activeTab === "Hackathons" && (
          <EventCard
            image="https://your-hackathon-image-url.jpg"
            category="hackathon"
            status="upcoming"
            title="AI/ML Hackathon 2024"
            description="48-hour hackathon focused on building innovative AI and machine learning solutions for real-world problems."
            date="Dec 20, 2024"
            location="Innovation Center"
            spots="28 / 50 spots"
            button="Register Now"
          />
        )}

        {activeTab === "Networking" && (
          <EventCard
            image="https://your-networking-image-url.jpg"
            category="networking"
            status="upcoming"
            title="Startup & Student Mixer"
            description="Network with innovative startups and talented students. Great opportunity to find collaborators and mentors."
            date="Dec 22, 2024"
            location="WeWork Downtown"
            spots="45 / 100 spots"
            button="Register Now"
          />
        )}

       
        

        {/* Repeat similar blocks for "Projects" or other tabs as needed */}
      </div>


      {/* <section className="cta-section">
        <h2 className="cta-title">Don't Miss Out on Opportunities</h2>
        <p className="cta-subtitle">
          Join our community and get notified about upcoming events and programs
        </p>
        <button className="cta-btn">
          Join Community <span className="arrow">&#8594;</span>
        </button>
      </section> */}
    </>
  );
};

export default Program;
