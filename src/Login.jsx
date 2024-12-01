import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
const Login = () => {

  const [email, setemal] =useState('')
    
const navigate=useNavigate();
    const handleLogin = () => {
        if (email==='productionmgr@gmail.com'){
          navigate("/DashboardProdction");

        }else if(email==='admin@gmail.com'){
          navigate("/DashboardAdmin");
          
        }else{
          navigate("/dashboard");

        }
      };

     const inputtrack =(emailinput) => {
      setemal(emailinput)
     }

  return (
    <div className="container">
      <div className="overlay"></div>
      <div className="loginBox">
      <div className="loginBoxTop">
        <h2 className="title">Login</h2>
        <p className="subtitle">Authorized Access Only</p>
        </div>
        <form className="form">
          <input type="email" placeholder="Email" className="input"
          onChange={(e)=>inputtrack(e.target.value)}
          />
          
          <input type="password" placeholder="Password" className="input" />
          
  <button onClick={handleLogin} className="button">Login</button>
      
        </form>
        
        <a href="#" className="forgotPassword">Forgot password?</a>
      </div>
    </div>
  );
};

export default Login;
