import React, { useState } from 'react';
import "../../assets/css/Resume.css";
import UserDash from './UserDash';
import axios from 'axios';

const Resume = () => {
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

  const [isResumeAdded, setIsResumeAdded] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8081/user/resume/postresume', formData);
      console.log('Form data sent successfully:', response.data);
      setIsResumeAdded(true); // Set the flag to true when resume is added successfully
    } catch (error) {
      console.error('Error sending form data:', error);
      alert("Failed to Add Resume!")
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <UserDash />
      {isResumeAdded ? ( // Render this section when resume is added
        <div className="body1">
          <div className="container">
            <h1>Resume Added</h1>
          </div>
        </div>
      ) : ( // Render the form when resume is not added
        <div className="body1">
          <div className="container">
            <h1>Add Resume</h1>
            <form onSubmit={handleSubmit}>
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
                Phone:
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </label>
              <label>
                Education:
                <input
                  type="text"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                />
              </label>
              <label>
                Experience:
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                />
              </label>
              <label>
                Skills:
                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                />
              </label>
              <label>
                Projects:
                <input
                  type="text"
                  name="projects"
                  value={formData.projects}
                  onChange={handleChange}
                />
              </label>
              <label>
                Languages:
                <input
                  type="text"
                  name="languages"
                  value={formData.languages}
                  onChange={handleChange}
                />
              </label>
              <button type="submit">Add</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resume;
