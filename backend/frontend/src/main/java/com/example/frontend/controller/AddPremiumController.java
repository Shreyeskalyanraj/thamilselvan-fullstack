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
import com.example.frontend.service.AddPremiumService;

@CrossOrigin("*")
@RestController
public class AddPremiumController {
     @Autowired
    AddPremiumService service;

    @PostMapping("/admin/premium/postJob")	
	public AddPremium add(@RequestBody AddPremium Jobpost ) {
		System.out.println(Jobpost);
		return service.addPremiumJob(Jobpost);
	}
	
	@GetMapping("/admin/premium/getJob")
	public java.util.List<AddPremium> read(){
		return service.getPremiumJob();
	}
	@DeleteMapping("/user/jobpost/{id}")
	public String delete(@PathVariable int id) {
		return service.DeleteJobById(id);
	}
	@PutMapping("/admin/premium/updateJob/{jobId}")
    public AddPremium updateJob(@PathVariable Integer jobId, @RequestBody AddPremium updatedJobPost) {
        return service.updatePremiumJob(jobId, updatedJobPost);
    }
}
