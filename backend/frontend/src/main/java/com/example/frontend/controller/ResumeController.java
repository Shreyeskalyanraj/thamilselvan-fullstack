package com.example.frontend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.frontend.model.AddPremium;
import com.example.frontend.model.Resume;
import com.example.frontend.service.ResumeService;

@CrossOrigin("*")
@RestController
public class ResumeController {
    @Autowired
    ResumeService service;

    @PostMapping("/user/resume/postresume")
	public Resume add(@RequestBody Resume Jobpost ) {
		return service.addResume(Jobpost);
	}
	
	@GetMapping("/user/resume/getresume")
	public java.util.List<Resume> read(){
		return service.getReusme();
	}
	@DeleteMapping("/user/resume/deleteresume/{id}")
	public String delete(@PathVariable int id) {
		return service.DeleteResumeById(id);
	}
	@PutMapping("/user/resume/updateresume/{id}") // Define the PUT mapping
    public String update(@PathVariable int id, @RequestBody Resume updatedResume) {
        return service.updateResume(id, updatedResume);
    }

}