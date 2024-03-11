package com.example.frontend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.frontend.model.User;
import com.example.frontend.repository.UserRepository;

@Service
public class UserService {

    // public static List<User> getAllUsers() {
    //     // TODO Auto-generated method stub
    //     throw new UnsupportedOperationException("Unimplemented method 'getAllUsers'");


    // }
    
    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User updateUser(Long userId, User updatedUser) {

        // Example:
        User existingUser = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        userRepository.save(existingUser);

        return existingUser;
    }

}
