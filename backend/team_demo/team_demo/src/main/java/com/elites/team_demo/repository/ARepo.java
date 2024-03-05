package com.elites.team_demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.elites.team_demo.entity.Application;

public interface ARepo extends JpaRepository<Application, Integer> {

}
