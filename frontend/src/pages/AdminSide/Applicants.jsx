import React, { useEffect, useState } from 'react';
import "../../assets/css/Applicants.css";
import axios from 'axios';
import AdminDash from './AdminDash';

const Applicants = () => {
  const [jobs, setJobListings] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8081/getApplyJob');
      setJobListings(response.data);
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching job data:', error);
    }
  };
  const handleDelete = async (jobId) => {
    
    const confirmDelete = window.confirm("Are you sure you want to delete this job?");
    
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:8081/Applyjobpost/${jobId}`);
        alert("Job Has Been Deleted Successfully");
        setJobListings(jobs.filter((job) => job.jobId !== jobId));
      } catch (error) {
        console.error("Error deleting job:", error);
        alert("Something Went Wrong");
      }
    }
  };

  return (
    <>
      <AdminDash />
      <div className='Jobs'>
        <br></br><br></br>
        <h1>Applied Jobs</h1> 
        <br></br><br></br>
        <div className='ooho'>
        {jobs.map((job,index) => (
          <div className="job-listings" key={index}>
            <p className='headings'><strong> {job.job}</strong></p>
              <p>Name: {job.userName}</p>
              <p>Company: {job.company}</p>
              <p>Type: {job.type}</p>
              <p>Salary: {job.salary}</p>
              <p>Period: {job.period}</p>
              <p>Test: {job.test ? 'Test Required' : 'Test Not Required'}</p>
              <button onClick={() => handleDelete(job.jobId)}>Delete</button>
          </div>
        ))}
        </div>
      </div>
    </>
  );
};

export default Applicants;
