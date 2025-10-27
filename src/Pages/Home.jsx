import React from "react";
import "../Style/Home.css";
import Navbar from "../Component/Navbar";
import Home1 from "./Home1";
import Card1 from "../Component/Card1";
import Card2 from "../Component/Card2";
import JoinCommunityBaner from "../Component/JoinCommuntyBanner";
import { useOnScreen } from "../hooks/useOnScreen";


function Home() {
  const [cardRef, cardVisible] = useOnScreen();
  const [joinRef, joinVisible] = useOnScreen();
  const [bannerRef, bannerVisible] = useOnScreen();

  return (
    <>
      {/* Navbar can be included here if needed */}
      {/* <Navbar /> */}

      <div className="hero-container">
        <Home1 />
      </div>

      <section className="why-join-container">
        <div className="join-head">
          <div>
            <h2>Why Join</h2>
            <h2 className="name">Crelon</h2>
            <h2>?</h2>
          </div>
          <p>
            Experience hands-on learning, build your network, and launch your
            career
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

      <section
        ref={joinRef}
        id="join-section"
        className={`join-container ${joinVisible ? "visible" : ""}`}
      >
        <Card2
          title="For Students"
          description="Gain hands-on experience through real projects, connect with innovative startups, and build a portfolio that stands out."
          arrow_icon={<i className="fi fi-br-angle-small-right"></i>}
          point1="Real-world project experience"
          point2="Mentorship from industry experts"
          point3="Portfolio-worthy project"
          btn="Join as Student"
          icon={<i className="fi fi-br-code-simple"></i>}
          bg_color="linear-gradient(135deg, #5242E5, #9036EB)"
          btn_color="#5242E5"
        />
        <Card2
          title="For Students"
          description="Gain hands-on experience through real projects, connect with innovative startups, and build a portfolio that stands out."
          icon={<i className="fi fi-rr-gym-bag"></i>}
          arrow_icon={<i className="fi fi-br-angle-small-right"></i>}
          point1="Real-world project experience"
          point2="Real-world project experience"
          point3="Real-world project experience"
          btn="Join as Student"
          bg_color="linear-gradient(135deg, #EB650D, #F39B0A)"
          btn_color="#EB650D"
        />
      </section>

      <div className="joincommnitybanner">
        <JoinCommunityBaner />
      </div>
    </>
  );
}

export default Home;
