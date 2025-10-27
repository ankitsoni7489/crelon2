import React from "react";
import "../Style/footer.css";
import Logo from "../assets/logo-light.png"
const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-col brand">
        <div className="footer-logo">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-desc">
          Connecting students and startups through innovation and collaboration.
        </div>
      </div>
      <div className="footer-col">
        <div className="footer-heading">Platform</div>
        <a href="#">About Us</a>
        <a href="#">Programs</a>
      </div>
      <div className="footer-col">
        <div className="footer-heading">Community</div>
        <a href="#">Forums</a>
        <a href="#">Resources</a>
        <a href="#">Browse Members</a>
        <a href="#">Contact</a>
      </div>
      <div className="footer-col">
        <div className="footer-heading">Support</div>
        <a href="#">FAQ</a>
        <a href="#">Help Center</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </div>
    <div className="footer-bottom">
      © 2024 Crelon. All rights reserved.
    </div>
  </footer>
);

export default Footer;
