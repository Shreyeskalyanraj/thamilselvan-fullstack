package com.elites.team_demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.elites.team_demo.entity.User;

public interface URepo extends JpaRepository<User, Integer> {
    Optional<User> findByEmail(String email);
}
