package com.example.frontend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class Resume {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer jobId;
    String name;
    String email;
    String phone;
    String education;
    String experience;
    String skills;
    String projects;
    String languages;
 
public Integer getJobId() {
    return jobId;
}
public void setJobId(Integer jobId) {
    this.jobId = jobId;
}
public String getName() {
    return name;
}
public void setName(String name) {
    this.name = name;
}
public String getEmail() {
    return email;
}
public void setEmail(String email) {
    this.email = email;
}
public String getPhone() {
    return phone;
}
public void setPhone(String phone) {
    this.phone = phone;
}
public String getEducation() {
    return education;
}
public void setEducation(String education) {
    this.education = education;
}
public String getExperience() {
    return experience;
}
public void setExperience(String experience) {
    this.experience = experience;
}
public String getSkills() {
    return skills;
}
public void setSkills(String skills) {
    this.skills = skills;
}
public String getProjects() {
    return projects;
}
public void setProjects(String projects) {
    this.projects = projects;
}
public String getLanguages() {
    return languages;
}
public void setLanguages(String languages) {
    this.languages = languages;
}
    
}


