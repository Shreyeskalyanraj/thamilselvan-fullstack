package com.example.frontend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.frontend.model.ApplyJob;
import com.example.frontend.model.Job;
import com.example.frontend.repository.ApplyJobRepo;
import com.example.frontend.repository.UserRepository;

@Service
public class ApplyJobService {

    @Autowired
    ApplyJobRepo repository;
    @Autowired
    UserRepository userRepository;
    
    // public Job addJob(ApplyJob Jobpost) {
	// 	return 
	// }
    public String addJob(String email,ApplyJob apply){
        apply.setUserName(userRepository.findByEmail(email).get().getUsername());
        repository.save(apply);
        return "Added";
    }
    public List<ApplyJob> getJob(){
		return repository.findAll();
	}
    public String DeleteJobById(int id) {
		repository.deleteById(id);;
		return "deleted";
	}
    public String updateJob(int id, ApplyJob updatedJob) {
        Optional<ApplyJob> optionalJob = repository.findById(id);
        if (optionalJob.isPresent()) {
            ApplyJob existingJob = optionalJob.get();
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
