// Signup.jsx
import React, { useState } from 'react';
import Navbar from '../../Components/ui/Navbar'; // Import the Navbar component
import '/src/assets/css/signup.css'; // Create a CSS file for signup page styles
import { Link } from 'react-router-dom';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);
    // Add logic for user registration or API call for signup
  };
  const handleGoogleSignup = () => {
    // Add logic for Google Sign-In
    console.log('Sign up with Google clicked');
};

  return (
    <div className='body'>
      
      <fieldset>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <label>
            Full Name:
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit"><Link to='/home'>Sign Up</Link></button>
        </form>
        < div className="google-signup">
        <p>Or sign up with:</p>
        <button onClick={handleGoogleSignup} className="google-button">
          Sign up with Google
        </button>
        </div>
      </fieldset>
    </div>
  );
};

export default Signup;
