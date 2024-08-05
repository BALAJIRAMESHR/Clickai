import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2>Click Ai</h2>
          <p>
            Click Ai is an AI-based photo distribution platform crafted to elevate event
            engagement, boost sponsors' ROI, and offer event analytics for all types of events.
          </p>
          <div className="social-icons">
            <i className="fa fa-facebook"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-linkedin"></i>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-section">
            <h3>Company</h3>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Packages</p>
          </div>
          <div className="footer-section">
            <h3>Sales</h3>
            <p>sales@clickai.com</p>
            <p>(406) 555-0120</p>
          </div>
          <div className="footer-section">
            <h3>Support</h3>
            <p>support@clickai.com</p>
            <p>(684) 555-0102</p>
            <p>FAQs</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
          <hr></hr>
        <p>Powered by Anthill Networks</p>
        <p>
          <button className="footer-link">Privacy</button> | 
          <button className="footer-link">Refund policy</button> | 
          <button className="footer-link">Terms & Conditions</button>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
