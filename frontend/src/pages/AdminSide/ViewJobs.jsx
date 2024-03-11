import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminDash from './AdminDash';

const ViewAddedJobs = () => {
  const [jobs, setJobs] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:8081/getJob')
    .then(response => {
      setJobs(response.data);
    })
    .catch(error => {
      console.error('Error fetching added jobs:', error);
    });
  }, []);
  
  const handleDelete = (jobId) => {
    console.log("id",jobId)
    axios.delete(`http://localhost:8081/jobpost/${jobId}`)
      .then(response => {
        console.log('Job deleted successfully:', response.data);
        setJobs(jobs.filter(job => job.jobId !== jobId));
      })
      .catch(error => {
        console.error('Error deleting job:', error);
      });
  };

  return (
    <div>
      <AdminDash />
      <br /><br />
      <h1>Free Jobs</h1>
      <div className='job-container'>
          <ul>
          {jobs.map(job => (
            <div className='job-listing'>
            <li key={job.jobId}>
              <p className='heading'><strong>{job.job}</strong></p>
              <p>Company: {job.company}</p>
              <p>Type: {job.type}</p>
              <p>Salary: {job.salary}</p>
              <p>Period: {job.period}</p>
              <p>Test: {job.test ? 'Test Required' : 'Test Not Required'}</p>
              <button onClick={() => handleDelete(job.jobId)}>Delete</button>
            </li>
              </div>
            ))}

          </ul>
        </div>
    </div>
  );
};

export default ViewAddedJobs;
