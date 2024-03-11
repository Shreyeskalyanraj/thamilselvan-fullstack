import React from 'react';
import Navbar from '../components/Navbar';
import "../assets/css/About.css"
const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <h1>About Us</h1><br></br><br></br>
        <p>Welcome to our job applying website! We are dedicated to connecting talented individuals with exciting job opportunities.</p>
        
        <h2>Our Mission</h2>
        <p>At JobLink, our mission is to simplify the job application process and make it easier for both employers and job seekers to find the perfect match. We believe in creating a seamless and user-friendly platform for a better recruitment experience.</p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>Wide Range of Job Opportunities</li>
          <li>User-Friendly Application Process</li>
          <li>Efficient Matching Algorithm</li>
          <li>Transparent Communication</li>
          <li>Dedicated Support Team</li>
        </ul>

        <h2>Contact Us</h2>
        <p>If you have any questions or need assistance, feel free to reach out to our support team at support@JobLink.com.</p>
      </div>
    </>
  );
};

export default About;
