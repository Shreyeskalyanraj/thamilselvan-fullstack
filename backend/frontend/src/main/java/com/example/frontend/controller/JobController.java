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

import com.example.frontend.model.Job;
import com.example.frontend.service.JobService;

//@CrossOrigin(origins = "http://localhost:8080")
@CrossOrigin("*")
@RestController
public class JobController {

    @Autowired
    JobService service;

    @PostMapping("/postJob")
	public Job add(@RequestBody Job Jobpost ) {
		return service.addJob(Jobpost);
	}
	
	@GetMapping("/getJob")
	public java.util.List<Job> read(){
		return service.getJob();
	}
	@DeleteMapping("/jobpost/{id}")
	public String delete(@PathVariable int id) {
		return service.DeleteJobById(id);
	}
	@PutMapping("/updateJob/{id}")
	public String update(@PathVariable int id, @RequestBody Job updatedJob) {
    return service.updateJob(id, updatedJob);
}
}