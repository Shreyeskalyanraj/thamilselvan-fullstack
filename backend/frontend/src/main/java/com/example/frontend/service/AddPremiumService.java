package com.example.frontend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.frontend.model.AddPremium;
import com.example.frontend.repository.AddPremiumRepo;

@Service
public class AddPremiumService {

     @Autowired
    AddPremiumRepo repository;

    public AddPremium addPremiumJob(AddPremium Jobpost) {
	return repository.save(Jobpost);
		
	}
    public List<AddPremium> getPremiumJob(){
		return repository.findAll();
	}
    public String DeleteJobById(int id) {
		repository.deleteById(id);;
		return "deleted";
	}
    public String Updatesignup(AddPremium Jobpost) {
		repository.save(Jobpost);
		return "saved";
	}
	public AddPremium updatePremiumJob(Integer jobId, AddPremium updatedJobPost) {
        Optional<AddPremium> existingJobPostOptional = repository.findById(jobId);
        
        if (existingJobPostOptional.isPresent()) {
            AddPremium existingJobPost = existingJobPostOptional.get();
            existingJobPost.setJob(updatedJobPost.getJob());
            existingJobPost.setCompany(updatedJobPost.getCompany());
            existingJobPost.setType(updatedJobPost.getType());
            existingJobPost.setSalary(updatedJobPost.getSalary());
            existingJobPost.setPeriod(updatedJobPost.getPeriod());
            existingJobPost.setTest(updatedJobPost.getTest());

            return repository.save(existingJobPost);
        } else {
            return null;
        }
    }
}