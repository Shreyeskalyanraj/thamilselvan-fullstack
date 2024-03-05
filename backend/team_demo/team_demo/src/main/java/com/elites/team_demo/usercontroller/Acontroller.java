package com.elites.team_demo.usercontroller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.elites.team_demo.entity.Application;
import com.elites.team_demo.userservice.AService;

@CrossOrigin(origins = "http://localhost:4000")
@RestController
public class Acontroller
{
	@Autowired
	private AService Aserv;
	
	@GetMapping("/showuser")
	public  List<Application> showUsers(){
		return Aserv.getUser();
	}  
	
	@PostMapping("/adduser") 
	public Application addUsers(@RequestBody Application obj) {
		return Aserv.addUser(obj);
	}	
	
	@GetMapping("/showuser/{id}")
	public Optional<Application> findById(@PathVariable Integer id) {
		return Aserv.findById(id);
	}
	@PutMapping("/updateuser/{id}")
	public Application update(@PathVariable Integer id,@RequestBody Application u){
		return Aserv.update(id,u);
	}
	
	@DeleteMapping("/deleteuser/{id}")
	public String removeUsers(@PathVariable Integer id) {
		Aserv.deleteById(id);
		return "Successfully Deleted!!";
	}
}
