import React, { useState, useEffect } from 'react';
import "../../assets/css/Resume.css";
import UserDash from './UserDash';
import axios from 'axios';

const Resume = () => {
  const [formData, setFormData] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8081/user/resume/getresume');
      const resumeData = response.data;
      setFormData(resumeData);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching resume data:', error);
    }
  };

  return (
    <div>
      <UserDash />
      <div className='body1'>
        <div className='container'>
          <h1>View Resume</h1>
          <div>
            {formData.length > 0 && (
              <div>
                <p><strong>Name:</strong> {formData[0].name}</p>
                <p><strong>Email:</strong> {formData[0].email}</p>
                <p><strong>Phone:</strong> {formData[0].phone}</p>
                <p><strong>Education:</strong> {formData[0].education}</p>
                <p><strong>Experience:</strong> {formData[0].experience}</p>
                <p><strong>Skills:</strong> {formData[0].skills}</p>
                <p><strong>Projects:</strong> {formData[0].projects}</p>
                <p><strong>Languages:</strong> {formData[0].languages}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
