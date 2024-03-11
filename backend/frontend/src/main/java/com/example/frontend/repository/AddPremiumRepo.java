package com.example.frontend.repository;

import com.example.frontend.model.AddPremium;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface AddPremiumRepo extends JpaRepository<AddPremium,Integer> {

   
}
