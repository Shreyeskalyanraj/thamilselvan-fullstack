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

import com.example.frontend.model.ApplyJob;
import com.example.frontend.model.Job;
import com.example.frontend.service.ApplyJobService;


//@CrossOrigin(origins = "http://localhost:8081")
@CrossOrigin("*")
@RestController
public class ApplyJobController {

    @Autowired
    ApplyJobService service;

    @PostMapping("/postApplyJob/{email}")
	public String add(@PathVariable String email,@RequestBody ApplyJob Jobpost ) {
		return service.addJob(email,Jobpost);
	}
	
	@GetMapping("/getApplyJob")
	public java.util.List<ApplyJob> read(){
		return service.getJob();
	}
	@DeleteMapping("/Applyjobpost/{id}")
	public String delete(@PathVariable int id) {
		return service.DeleteJobById(id);
	}
	@PutMapping("/updateApplyJob/{id}")
	public String update(@PathVariable int id, @RequestBody ApplyJob updatedJob) {
    return service.updateJob(id, updatedJob);
}
}
