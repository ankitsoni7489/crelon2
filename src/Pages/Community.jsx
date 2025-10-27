import React from "react";
import "../Style/Community.css"
import ConnectPlatform from "../Component/ConnectPlatform";
import { useOnScreen } from "../hooks/useOnScreen";
import Card1 from "../Component/Card1";
import Testimonial from "../Component/Testonomial";


const Community = () => {
  const [cardRef, cardVisible] = useOnScreen();
  return (
  <>
      <div className="info-card-head">
        <div className="info-head">
        <div className="heading">
            <h1>Welcome to Our </h1>
            <div class="content">
                <h1 class="title">Community
                    <div class="aurora">
                    <div class="aurora__item"></div>
                    <div class="aurora__item"></div>
                    <div class="aurora__item"></div>
                    <div class="aurora__item"></div>
                    </div>
                </h1>
                
            </div>
                            
          </div>
              <p className="para">A vibrant ecosystem of students, startups, mentors, and innovators collaborating to shape the future.</p>
              <div className="join-btn">
                <button className="btn">Join Discord</button>
                <button className="btn">Join Slack</button>
              </div>
          </div>
          
    </div>
    <ConnectPlatform/>
    <section className="why-join-container">
        <div className="join-head">
          <div>
            <h2>Community</h2>
            <h2 className="name">Features</h2>
          </div>
          <p>
            Everything you need to learn, grow, and succeed together
          </p>
        </div>
    </section>
    <section
        ref={cardRef}
        className={`card1-container ${cardVisible ? "visible" : ""}`}
      >
        <Card1
          title_card1="Events & Workshops"
          description_card1="Participate in hands-on workshops, hackathons, and collaborative projects"
          icon_card1={<i className="fi fi-rr-calendar"></i>}
          gradient_card1="linear-gradient(135deg, #3288F1, #17A9DD)"
        />
        <Card1
          title_card1="Network & Connect"
          description_card1="Build meaningful relationships with like-minded students and innovative startups"
          icon_card1={<i className="fi fi-rr-users"></i>}
          gradient_card1="linear-gradient(135deg, #B254E6, #DC4CAD)"
        />
        <Card1
          title_card1="Real Experience"
          description_card1="Gain practical skills and portfolio-worthy projects that matter"
          icon_card1={<i className="fi fi-rs-trophy-star"></i>}
          gradient_card1="linear-gradient(135deg, #F7960D, #F77C15)"
        />
        <Card1
          title_card1="Events & Workshops"
          description_card1="Participate in hands-on workshops, hackathons, and collaborative projects"
          icon_card1={<i className="fi fi-rs-rocket-lunch"></i>}
          gradient_card1="linear-gradient(135deg, #1DC165, #14B978)"
        />
      </section>
      <Testimonial/>
  </>
);
}
// Welcome to Our Community
export default Community;
