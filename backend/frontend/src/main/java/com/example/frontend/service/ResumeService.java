package com.example.frontend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.frontend.model.Resume;
import com.example.frontend.repository.ResumeRepo;

@Service
public class ResumeService {

    @Autowired
    ResumeRepo repository;

    public Resume addResume(Resume postResume) {
	return repository.save(postResume);
		
	}
    public List<Resume> getReusme(){
		return repository.findAll();
	}
    public String DeleteResumeById(int id) {
		repository.deleteById(id);;
		return "deleted";
	}
	public String updateResume(int id, Resume updatedResume) {
        Optional<Resume> existingResumeOptional = repository.findById(id);
        if (existingResumeOptional.isPresent()) {
            Resume existingResume = existingResumeOptional.get();
            // Update the fields of existingResume with the fields from updatedResume
            existingResume.setName(updatedResume.getName());
            existingResume.setEmail(updatedResume.getEmail());
            existingResume.setPhone(updatedResume.getPhone());
            existingResume.setEducation(updatedResume.getEducation());
            existingResume.setExperience(updatedResume.getExperience());
            existingResume.setSkills(updatedResume.getSkills());
            existingResume.setProjects(updatedResume.getProjects());
            existingResume.setLanguages(updatedResume.getLanguages());
            
            repository.save(existingResume);
            return "updated";
        } else {
            return "Resume not found"; // Or throw an exception
        }
    }

	
	
}
