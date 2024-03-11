import React from 'react';
import "../assets/css/Signup.css";
import Navbar from "../components/Navbar";
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
    const handleRegister = () => {
        alert("Signed up successfully");
    };
    const[name,setUsername]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    
    const navigate= useNavigate();
    const handleSubmit = async(e)=>{

        
        e.preventDefault();
        try{
            
           const response= await axios.post(`http://localhost:8081/api/v1/auth/register`,{name,email,password})
           navigate("/Login");
              const token = response.data.token;
              const id = response.data.id;
              console.log(email)
              console.log(token);
              localStorage.setItem('jwtToken', token);
              localStorage.setItem("user",JSON.stringify({name:name,email : email , role : "user"}))
            }
        catch(error) {
			console.error('Error sending data:', error);
		}
    }


    return (
        <>
            <Navbar />
            <div className="Border">
                <div className="Content">
                    <h1>New User?</h1>
                    <div className="form-floating mb-3 Move">
                        <input type="text" className="form-control Box" id="floatingUsername" placeholder="Username" value={name} onChange={(e)=>{setUsername(e.target.value)}}/>
                        <label htmlFor="floatingUsername">Username</label>
                    </div>
                    <div className="form-floating mb-3 Move">
                        <input type="email" className="form-control Box" id="floatingEmail" placeholder="name@example.com" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                        <label htmlFor="floatingEmail">Email address</label>
                    </div>
                    <div className="form-floating mb-3 Move">
                        <input type="password" className="form-control Box" id="floatingPassword" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating Move">
                        <input type="password" className="form-control Box" id="floatingConfirmPassword" placeholder="Confirm Password" />
                        <label htmlFor="floatingConfirmPassword">Confirm Password</label>
                    </div><br></br>
                 <Link to="/Login"  ><div className="d-grid gap-2 col-6 mx-auto" style={{ width: 350 }}>
                        <button className="btn btn-primary" type="button" onClick={handleSubmit}>
                            Register
                        </button>
                    </div></Link>
                </div>
            </div>
        </>
    );
}

export default Signup;
