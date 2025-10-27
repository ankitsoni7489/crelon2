import React from "react";
import "../Style/About.css"
import ValueCard from "../Component/ValueCard";
import TeamSection from "../Component/Team";
import { useOnScreen } from "../hooks/useOnScreen";
import { useOnScreenDirectional } from "../hooks/useOnScreenDirectional";
import { Link } from "react-router-dom";
import Core from "../Component/Core";
const Info = () => {
    const [leftRef, leftVisible] = useOnScreenDirectional();
    const [rightRef, rightVisible] = useOnScreenDirectional();
    const [ref, isVisible] = useOnScreen();
    const [team, isteam] = useOnScreen();

    return(
  <>
    {/* <div className="info-card-head">
        <div className="info-head">
        <div className="heading">
            <h1>About</h1>
            <div class="content">
                <h1 class="title">CRELON
                    <div class="aurora">
                    <div class="aurora__item"></div>
                    <div class="aurora__item"></div>
                    <div class="aurora__item"></div>
                    <div class="aurora__item"></div>
                    </div>
                </h1>
                
            </div>
                            
            </div>
                <p className="para">Bridging the gap between academic learning and real-world innovation, one connection at a time.</p>
            </div>
    </div> */}

    <div className="about-card">
        <div className="about-head">
            <h1>About Us</h1>
        </div>
        <div class="about-content">
            <h1 class="about-title">CRELON
                <div class="about-aurora">
                <div class="about-aurora__item"></div>
                <div class="about-aurora__item"></div>
                <div class="about-aurora__item"></div>
                <div class="about-aurora__item"></div>
                </div>
            </h1>
        </div>
        <div className="about-para-container">
            <p className="about-para">Bridging the gap between academic learning and real-world innovation, one connection at a time.</p>
        </div>
        <div className="contact-btn">
            <Link to="/login" className='btn'>
              Get In Tocuh
            </Link>
        </div>
    </div>

    <div className="mv-container">
      <div className="mission">
        <div className="mission-head">
          <h2>
            Our <span>Mission</span>
          </h2>
        </div>
        <div className="mission-para">
          <p>
            CRELON was founded with a simple yet powerful vision: to create a
            thriving ecosystem where students don't just learn theory, but gain
            hands-on experience through real projects with innovative startups.
          </p>
          <p>
            We believe that the best learning happens through doing. By
            connecting passionate students with ambitious startups, we're
            creating opportunities for mutual growth, innovation, and success.
          </p>
        </div>
      </div>

      <div ref={rightRef} className={`vission ${rightVisible ? "visible" : ""}`}>
        <i className="fi fi-rs-rocket-lunch"></i>
        <h2>The Vision</h2>
        <p>
          To become the world's leading platform connecting the next generation
          of talent with innovative companies, fostering a culture of continuous
          learning and entrepreneurship.
        </p>
      </div>
    </div>

    <div className="core-vlues">
        <div className="value-head">
            <h2>Our <span>Core Values</span></h2>
            <p>The principles that guide everything we do</p>
        </div>
        <div
        ref={ref}
        className={`value-card-container ${isVisible ? "visible" : ""}`}
        >

            <ValueCard
            icon={<i className="fi fi-br-lightbulb-on"></i>}
            title="Innovation"
            description="We foster creativity and encourage thinking outside the box to solve real-world challenges."
            bgColor="#fff"
            iconBg="linear-gradient(135deg, #7b53f7, #b55fff)"
            iconColor="#fff"
            />

            <ValueCard
            icon={<i className="fi fi-br-users-alt"></i>}
            title="Collaboration"
            description="Together we achieve more. We believe in the power of diverse minds working towards common goals."
            bgColor="#fff"
            iconBg="linear-gradient(135deg, #6e8efb, #a777e3)"
            iconColor="#fff"
            />

            <ValueCard
            icon={<i className="fi fi-br-bullseye-pointer"></i>}
            title="Excellence"
            description="We strive for quality in everything we do, from events to mentorship to community building."
            bgColor="#fff"
            iconBg="linear-gradient(135deg, #f7971e, #ffd200)"
            iconColor="#fff"
            />

            <ValueCard
            icon={<i className="fi fi-br-heart"></i>}
            title="Empowerment"
            description="We're committed to providing opportunities that help students and startups reach their full potential."
            bgColor="#fff"
            iconBg="linear-gradient(135deg, #ff6263, #f797a7)"
            iconColor="#fff"
            />

        </div>
    </div>
    {/* <div className="core-value-section">
        <div className="core-value-card">
            <div>
                <h1>Innovation</h1>
                <button>Get More</button>
            </div>
        </div>
        <div className="core-value-card" id="box2">
            <div>
                <h1>Innovation</h1>
                <button>Get More</button>
            </div>
        </div>
        <div className="core-value-card">
            <div>
                <h1>Innovation</h1>
                <button>Get More</button>
            </div>
        </div>
        <div className="core-value-card" id="box4">
            <div>
                <h1>Innovation</h1>
                <button>Get More</button>
            </div>
        </div>
    </div> */}

    
   <div ref={ref} className={`team-container ${isVisible ? "visible" : ""}`}>
      <TeamSection />
    </div>



  </>
);
}
export default Info;
