// ProfilePage.jsx

import React from 'react';
import '/src/assets/css/Profile.css'

const ProfilePage = () => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img src="/src/assets/images/user.jpg" alt="User Avatar" className="avatar" />
        <h2 className="username">Shreyes kalyan raj</h2>
      </div>
      <div className="profile-details">
        <p className="email">Email: sivashreyes786@gmail.com</p>
        <p className="location">Location: Coimbatore, India</p>
        <p className="joined">Joined: January 1, 2022</p>
         <p className='phonenumber'>Phone Number:7709999998</p>
         <p className='Address'>Address:3/595-Bharathi nagar</p>
      </div>
      <div className="profile-content">
        <h3>About Me</h3>
        <p className="about-text">
        My journey in google has equipped me with valuable skills in javafullstack.
        I enjoy turning complex problems into simple and elegant solutions.
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;
