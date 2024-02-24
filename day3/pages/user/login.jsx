// import React, { useState } from 'react';

// import { Link } from 'react-router-dom';
// import '/src/assets/css/login.css';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     console.log('Username:', username);
//     console.log('Password:', password);
//   };

//   return (
      
//       <div className='body'>
//       <fieldset>
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <label>
//             Username:
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </label>
//           <br />
//           <label>
//             Password:
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </label>
//           <br />
//           <Link to='/home'>
//           <button type="submit">Login</button></Link>
//         </form>
//         <div className="additional-options">
//           <span>
//             <Link to="/sign">Sign Up</Link>
//           </span>
//           <span>
//             <a href="/forgot-password">Forgot Password</a>
//           </span>
//         </div>
//       </fieldset>
//     </div>
//   );
// };


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '/src/assets/css/login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    console.log('Username:', username);
    console.log('Password:', password);

    
    setError('');
  };

  return (
    <div className='body'>
      <fieldset>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          <div className="error-message">{error}</div>
          <Link to='/home'>
            <button type="submit">Login</button>
          </Link>
        </form>
        <div className="additional-options">
          <span>
            <Link to="/sign">Sign Up</Link>
          </span>
          <span>
            <a href="/forgot-password">Forgot Password</a>
          </span>
        </div>
      </fieldset>
    </div>
  );
};

export default Login;
