import React from 'react';
import "../../assets/css/AdminDash.css"
import { Link } from "react-router-dom";
function AdminDash() {
  return (
    <>
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Hello </h3>
    
      </div>
      <div className="sidebar-menu">
        <ul>
          <li>
          <Link to={"/AdDash"}>
              <i className="fas fa-home"></i>⮞ DashBoard
            </Link>
          </li>
          <li>
            <Link to={"/ViewJobs"}>
              <i className="fas fa-briefcase"></i>⮞ View Jobs
            </Link>
          </li>
          <li>
            <Link to={"/AddJob"}>
              <i className="fas fa-briefcase"></i>⮞ Add Jobs
            </Link>
          </li>
          <li>
            <Link to={"/AddPremium"}>
              <i className="fas fa-briefcase"></i>⮞ Add Premium 
              Jobs
            </Link>
          </li>
          <li>
            <Link to={"/PremiumJobs"}>
              <i className="fas fa-user"></i>⮞ Premium Jobs
            </Link>
          </li>
          
          <li>
            <Link to={"/Applicants"}>
              <i className="fas fa-user"></i>⮞ Applicants
            </Link>
          </li>
          <li>
            <Link to={"/SiteSet"}>
              <i className="fas fa-user"></i>⮞ Premium Payment
            </Link>
          </li>
          <li>
            <Link to={"/PremiumUsers"}>
              <i className="fas fa-user"></i>⮞ Premium Users
            </Link>
          </li>
          <li>
            <Link to={"/Logout"}>
              <i className="fas fa-user"></i>⮞ Logout
            </Link>
          </li>

        </ul>
      </div>
    </div>
    
    </>
  );
}

export default AdminDash;