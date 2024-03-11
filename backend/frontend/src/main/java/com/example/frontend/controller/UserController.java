package com.example.frontend.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.frontend.model.User;
import com.example.frontend.service.UserService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
class resourceNameController {

    @Autowired
    private UserService userService;

    @GetMapping("/")
    public String getAll() {
       return "Heyy Hari";
    }

    @GetMapping("/getusers")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    @PutMapping("/updateuser")
    public ResponseEntity<User> updateUser(@PathVariable Long userId, @RequestBody User updatedUser) {
        User updatedUserInfo = userService.updateUser(userId, updatedUser);
        return ResponseEntity.ok(updatedUserInfo);
    }

   
}