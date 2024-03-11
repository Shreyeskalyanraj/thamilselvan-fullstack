import React, { useState } from 'react';
import "../../assets/css/UserProfile.css";
import UserDash from './UserDash';
import profile from "../../assets/images/Profile.png";

const UserProfile = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    skills: '',
    projects: '',
    languages: '',
  });

  // State to manage whether the form is in edit mode
  const [isEditing, setIsEditing] = useState(true);

  // Event handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Event handler for edit button click
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Event handler for save button click
  const handleSave = () => {
    setIsEditing(false);
    // Add logic to save the form data (e.g., send it to a server or update state)
    console.log('Form data saved:', formData);
  };

  // JSX for view mode
  const viewMode = (
    <div className='user-profile'>
      <div className='profile-container'>
        <div className='profile-image'>
          <img src={profile} alt='Profile' />
        </div>
        <div className='profile-details'>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Age: {formData.phone}</p>
          <p>Gender: {formData.education}</p>
          <p>Contact: {formData.experience}</p>
          <p>Region: {formData.skills}</p>
          <p>Status: {formData.projects}</p>
          <button type="button" onClick={handleEdit}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );

  // JSX for edit mode
  const editMode = (
    <div className='user-profile'>
      <div className='profile-container'>
        <div className='profile-image'>
          <img src={profile} alt='Profile' />
        </div>
        <div className='profile-form'>
          <form>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <label>
              Email:
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <label>
              Age:
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </label>
            <label>
              Gender:
              <input
                type="text"
                name="education"
                value={formData.education}
                onChange={handleChange}
              />
            </label>
            <label>
              Contact:
              <input
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
              />
            </label>
            <label>
              Region:
              <input
                type="text"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
              />
            </label>
            <label>
              Status:
              <input
                type="text"
                name="projects"
                value={formData.projects}
                onChange={handleChange}
              />
            </label>
      
            <button type="button" onClick={handleSave}>
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <UserDash />
      {isEditing ? editMode : viewMode}
    </div>
  );
};

export default UserProfile;
