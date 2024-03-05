package com.elites.team_demo.userservice;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.elites.team_demo.dto.request.AuthenticationRequest;
import com.elites.team_demo.dto.request.RegisterRequest;
import com.elites.team_demo.dto.response.AuthenticationResponse;
import com.elites.team_demo.entity.Role;
import com.elites.team_demo.entity.User;
import com.elites.team_demo.repository.URepo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
     
    @Autowired
    private final URepo userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {
        if(request.getUserRole().equals("user")){   
                var user = User
                        .builder()
                        .name(request.getName())
                        .email(request.getEmail())
                        .password(passwordEncoder.encode(request.getPassword()))
                        .role(Role.USER)
                        .build();
                Optional<User> existing = userRepository.findByEmail(request.getEmail());
                if(!existing.isEmpty()) {
                        return AuthenticationResponse.builder()
                        .token("Email Already exists")
                        .build();
                }
                User savedUser = userRepository.save(user);
                var jwtToken = jwtService.generateToken(user);
                return AuthenticationResponse.builder()
                        .token(jwtToken)
                        .build();
        }
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        System.out.println(request);
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

}