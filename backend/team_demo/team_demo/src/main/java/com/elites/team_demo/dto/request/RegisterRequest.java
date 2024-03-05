package com.elites.team_demo.dto.request;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
public class RegisterRequest {
    private String fname;
    private String lname;
    private Date dob;
    private String email;
    private String password;
    private String cpassword;
    public Object getUserRole() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getUserRole'");
    }

    
}