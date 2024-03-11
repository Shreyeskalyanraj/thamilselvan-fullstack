package com.example.frontend.repository;

import com.example.frontend.model.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface JobRepo extends JpaRepository<Job,Integer> {

   
}
