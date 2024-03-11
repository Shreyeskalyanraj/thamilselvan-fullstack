import React from 'react';
import "../assets/css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section1">
          <h3>About Us</h3><br></br>
          <p>We’re hiring! Looking for line cooks to join our award-winning kitchen team. On-site training available.</p>
        </div>

        <div className="footer-section2">
          <h3>Connect With Us</h3><br></br>
          <p>Email : joblinkindia@gmail.com</p>
          <p>Instagram : @joblink_india</p>
          <p>LinkedIn : @joblink_india</p>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 JobLink. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;