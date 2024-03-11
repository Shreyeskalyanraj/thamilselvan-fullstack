import React from 'react';
import "../../assets/css/UserDash.css"
import { Link } from "react-router-dom";
function UserDash() {
  return (
    <>
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Hello,User!</h3>
        
      </div>
      <div className="sidebar-menu">
        <ul>
          <li>
          <Link to={"/DashBoard"}>
              <i className="fas fa-home"></i>🏠 DashBoard
            </Link>
          </li>
          <li>
            <Link to={"/Resume"}>
              <i className="fas fa-briefcase"></i>📄 Add Resume
            </Link>
          </li>
          <li>
            <Link to={"/EditResume"}>
              <i className="fas fa-briefcase"></i> ✍ Manage Resume
            </Link>
          </li>
          <li>
            <Link to={"/JobList"}>
              <i className="fas fa-user"></i>💼 Job List
            </Link>
          </li>
          <li>
            <Link to={"/Premium"}>
              <i className="fas fa-user"></i>💸 Premium Jobs
            </Link>
          </li>
          <li>
            <Link to={"/AppliedJobs"}>
              <i className="fas fa-user"></i>📝 Applied Jobs
            </Link>
          </li>
          <li>
            <Link to={"/UserProfile"}>
              <i className="fas fa-cog"></i>👤 Profile
            </Link>
          </li>
          <li>
            <Link to={"/Logout"}>
              <i className="fas fa-cog"></i>👋 Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
    
    </>
  );
}

export default UserDash;