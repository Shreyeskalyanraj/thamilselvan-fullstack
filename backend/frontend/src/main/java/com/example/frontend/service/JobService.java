package com.example.frontend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.frontend.model.Job;
import com.example.frontend.repository.JobRepo;

@Service
public class JobService {

    @Autowired
    JobRepo repository;
    
    public Job addJob(Job Jobpost) {
		return repository.save(Jobpost);
		
	}
    public List<Job> getJob(){
		return repository.findAll();
	}
    public String DeleteJobById(int id) {
		repository.deleteById(id);;
		return "deleted";
	}
    public String updateJob(int id, Job updatedJob) {
        Optional<Job> optionalJob = repository.findById(id);
        if (optionalJob.isPresent()) {
            Job existingJob = optionalJob.get();
            existingJob.setJob(updatedJob.getJob());
            existingJob.setCompany(updatedJob.getCompany());
            existingJob.setType(updatedJob.getType());
            existingJob.setSalary(updatedJob.getSalary());
            existingJob.setPeriod(updatedJob.getPeriod());
            existingJob.setTest(updatedJob.getTest());
            repository.save(existingJob);
            return "Job updated successfully";
        } else {
            return "Job not found";
        }
    }

}