import React, { useState } from 'react';
import axios from 'axios';
import AdminDash from './AdminDash';
import "../../assets/css/AddJob.css";

function AddJob() {
  const [formData, setFormData] = useState({
    job: '',
    company: '',
    type: '',
    salary: '',
    period: '',
    test: ''
  });

  function handleSubmit(event) {
    event.preventDefault();

    axios.post('http://localhost:8081/postJob', formData)
      .then(response => {
        console.log('Job added successfully:', response.data);
        alert('Job added successfully!');
        setFormData({
          job: '',
          company: '',
          type: '',
          salary: '',
          period: '',
          test: ''
        });
        console.log(formData)
      })
      .catch(error => {
        console.error('Error adding job:', error);
        alert('Failed to add job. Please try again later.');

      });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
  

  return (
    <>
      <AdminDash />
      <br /><br />
      <h1>Add Job</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Job:
          <input type="text" name="job" value={formData.job} onChange={handleChange} />
        </label>
        <label>
          Company:
          <input type="text" name="company" value={formData.company} onChange={handleChange} />
        </label>
        <label>
          Work Type:
          <select name="type" value={formData.type} onChange={handleChange}>
          <option value="">--select--</option>
          <option value="Work from Home">Work from Home</option>
          <option value="Work from Office">Work from Office</option>
        </select>

        </label>
        <label>
          Salary:
          <input type="text" name="salary" value={formData.salary} onChange={handleChange} />
        </label>
        <label>
          Time Period:
          <select name="period" value={formData.period} onChange={handleChange}>
          <option value="">--select--</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
          </select>

        </label>
        <label>
          Test Requirement:
          <select name="test" value={formData.test} onChange={handleChange}>
          <option value="">--select--</option>
          <option value="Required">Required</option>
          <option value="Not Required">Not Required</option>
        </select>

        </label>
        <button className="buttonss" type="submit">Add Job</button>
      </form>
    </>
  );
}

export default AddJob;