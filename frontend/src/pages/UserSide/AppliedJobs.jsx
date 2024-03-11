import React, { useEffect, useState } from 'react';
import UserDash from './UserDash';
import "../../assets/css/AppliedJobs.css";
import axios from 'axios';

const AppliedJobs = () => {
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
      <UserDash />
      <div className='Jobss'>
        <br></br><br></br>
        <h1>Applied Jobs</h1> 
        {jobs.map((job,index) => (
          <div className="job-listingss" key={index}>
            <p className='headingss'><strong> {job.job}</strong></p>
              <p>Company: {job.company}</p>
              <p>Type: {job.type}</p>
              <p>Salary: {job.salary}</p>
              <p>Period: {job.period}</p>
              <p>Test: {job.test ? 'Test Required' : 'Test Not Required'}</p>
            <button onClick={() => handleDelete(job.jobId)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default AppliedJobs;
