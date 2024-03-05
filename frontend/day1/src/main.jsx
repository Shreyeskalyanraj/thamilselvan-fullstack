import React from 'react'
import ReactDOM from 'react-dom';
// import App from './App.jsx'
import Login from './pages/user/login.jsx'
import Signup from './pages/user/Signup.jsx';
import Home from './pages/user/Home.jsx';
import Box from './pages/user/Box.jsx';
import ProfilePage from './pages/user/Profile.jsx';
import JobDetails from './pages/user/javafullstack.jsx';
// import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
