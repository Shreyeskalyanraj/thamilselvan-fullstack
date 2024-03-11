import { Link, useNavigate } from "react-router-dom";
import "../assets/css/Login.css"
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import axios from "axios";
function Login() {
    const navigate=useNavigate();
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const token=localStorage.getItem("jwtToken");
console.log(token);
const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  }
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      `http://localhost:8081/api/v1/auth/authenticate`,
      { email, password }
    );

    const token = response.data.token;
    console.log(email);
    console.log(token);
    localStorage.setItem("jwtToken2", token);

    let role = "";
    if (email.trim().includes("@admin.com") && response.status === 200) {
      role = "admin";
      localStorage.setItem("user",JSON.stringify({email : email , role : "admin"}))
      navigate('/AdDash');
      
    } else if (email.trim().includes("@gmail.com") && response.status === 200) {
      role = "user";
      localStorage.setItem("user",JSON.stringify({email : email , role : "user"}))
      navigate('/DashBoard');
    }

    const data = {
      email: email,
      password: password,
      role: role,
    };

    console.log(data);
  } catch (error) {
    console.error("Error sending data:", error);
  }
};


    return ( 
        <>
        <Navbar/>
        <div className="Border">
            <div className="Content">
            <h1>Welcome Back!</h1>
                <div class="form-floating mb-3 Move">
                <input
                type="email"
                class="form-control Box"
                id="floatingPassword"
                placeholder="eee"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
/>
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating Move">
                <input
                type="password"
                class="form-control Box"
                id="floatingInput"
                placeholder="name@example.com"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
                    <label for="floatingPassword">Password</label>
                </div><br></br>
                <div class="d-grid gap-2 col-6 mx-auto " style={{width:350}} >
                <button class="btn btn-primary" type="button" onClick={handleSubmit}>
    Login
</button>

                    
                </div>
            </div>
        </div>
        </>
     );
}

export default Login;