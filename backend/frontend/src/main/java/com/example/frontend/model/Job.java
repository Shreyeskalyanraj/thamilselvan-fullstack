package com.example.frontend.model; 


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer jobId;
    String job;
    String company;
    String type;
    String salary;
    String period;
    String test;
 
public Integer getJobId() {
    return jobId;
}
public void setJobId(Integer jobId) {
    this.jobId = jobId;
}
public String getJob() {
    return job;
}
public void setJob(String job) {
    this.job = job;
}
public String getCompany() {
    return company;
}
public void setCompany(String company) {
    this.company = company;
}
public String getType() {
    return type;
}
public void setType(String type) {
    this.type = type;
}
public String getSalary() {
    return salary;
}
public void setSalary(String salary) {
    this.salary = salary;
}
public String getPeriod() {
    return period;
}
public void setPeriod(String period) {
    this.period = period;
}
public String getTest() {
    return test;
}
public void setTest(String test) {
    this.test = test;
}
    
}
