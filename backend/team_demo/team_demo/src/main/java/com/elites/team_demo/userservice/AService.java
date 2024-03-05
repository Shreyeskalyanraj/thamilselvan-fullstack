package com.elites.team_demo.userservice;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.boot.ApplicationArguments;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.elites.team_demo.entity.Application;
import com.elites.team_demo.repository.ARepo;

@Service
public class AService {
    

	@Autowired
	private ARepo repo;

	// addEmployee
	public Application addUser(Application obj) {
		return repo.save(obj);
	}
	
	// getEmployee
	public List<Application> getUser() {
		List<Application> arr = new ArrayList<>();
		arr = repo.findAll();
		return arr;
	}
	
	//deleteById  
	public void deleteById(Integer id) {
		repo.deleteById(id);
	}
	
	//getById
	public Optional<Application> findById(Integer id) {
		Optional<Application> g = repo.findById(id);
		return g;
	}
	
	//Paging
	public List<Application> showValues(){
		Pageable p=PageRequest.of(0,3);
		Page<Application> c=repo.findAll(p);
		return c.toList();
	}
	
	//Sorting
	public List<Application> sort(){
		return repo.findAll(Sort.by(Sort.Direction.DESC,"cost"));
	}
	
	//update
	public Application update(Integer id,Application ur) {
	    Application u= repo.findById(id).get();
		
		if(Objects.nonNull(u) && (!(Objects.isNull(ur.getFname())))) {
			u.setFname(ur.getFname());
		}

		if(Objects.nonNull(u) && (!(Objects.isNull(ur.getLname())))) {
			u.setLname(ur.getLname());
		}

		if(Objects.nonNull(u) && (!(Objects.isNull(ur.getDob())))) {
			u.setDob(ur.getDob());
		}

		if(Objects.nonNull(u) && (!(Objects.isNull(ur.getLname())))) {
			u.setLname(ur.getLname());
		}

		if(Objects.nonNull(u) && (!(Objects.isNull(ur.getCity())))) {
			u.setCity(ur.getCity());
		}
		if(Objects.nonNull(u) && (!(Objects.isNull(ur.getEmail())))) {
			u.setEmail(ur.getEmail());
		}
		if(Objects.nonNull(u) && (!(Objects.isNull(ur.getPosition())))) {
			u.setPosition(ur.getPosition());
		}
		return repo.save(u);
	}
}
