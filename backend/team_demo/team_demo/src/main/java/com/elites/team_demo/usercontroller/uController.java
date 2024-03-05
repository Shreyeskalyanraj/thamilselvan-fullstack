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

import com.elites.team_demo.entity.User;
import com.elites.team_demo.userservice.uService;

@CrossOrigin(origins = "http://localhost:5432")
@RestController
public class uController
{
	@Autowired
	private uService Userv;
	
	@GetMapping("/showuser")
	public  List<User> showUsers(){
		return Userv.getUser();
	}  
	
	@PostMapping("/adduser") 
	public User addUsers(@RequestBody User obj) {
		return Userv.addUser(obj);
	}	
	
	@GetMapping("/showuser/{id}")
	public Optional<User> findById(@PathVariable Integer id) {
		return Userv.findById(id);
	}
	@PutMapping("/updateuser/{id}")
	public User update(@PathVariable Integer id,@RequestBody User u){
		return Userv.update(id,u);
	}
	
	@DeleteMapping("/deleteuser/{id}")
	public String removeUsers(@PathVariable Integer id) {
		Userv.deleteById(id);
		return "Successfully Deleted!!";
	}
}
