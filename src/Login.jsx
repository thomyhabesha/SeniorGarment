import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
const Login = () => {

    
const navigate=useNavigate();

    const handleLogin = () => {
        // Perform login logic (e.g., form validation, API call)
        // If login is successful, navigate to the dashboard
        navigate("/dashboard");
      };



  return (
    <div className="container">
      <div className="overlay"></div>
      <div className="loginBox">
      <div className="loginBoxTop">
        <h2 className="title">Login</h2>
        <p className="subtitle">Authorized Access Only</p>
        </div>
        <form className="form">
          <input type="email" placeholder="Email" className="input" />
          
          <input type="password" placeholder="Password" className="input" />
          
  <button onClick={handleLogin} className="button">Login</button>
      
        </form>
        
        <a href="#" className="forgotPassword">Forgot password?</a>
      </div>
    </div>
  );
};

export default Login;
