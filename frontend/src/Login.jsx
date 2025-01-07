import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('admin'); // Default role
  const [error, setError] = useState(''); // Error state for displaying error messages
  const navigate = useNavigate();

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Logging in with:', username, password, role);  // Debugging line
    
    const loginData = { username, password, role };
  
    try {
      const response = await axios.post('http://localhost:5000/api/login', loginData);
      if (response.data.message) {
        // Store user data in localStorage
        const { Fname, Lname, email,user_role } = response.data.user;
        const userData = { Fname, Lname, email, user_role };
        localStorage.setItem('user', JSON.stringify(userData)); // Store user data in localStorage

        // Navigate based on the role
        if (response.data.user.user_role === 'Admin') {
          navigate('/DashboardAdmin');
        } else if (response.data.user.user_role === 'Production manager') {
          navigate('/DashboardProdction');
        } else if (response.data.user.user_role === 'Inventory manager') {
          navigate('/DashboardInventory');
        }
      } else {
        // If the login fails, set the error state
        setError(response.data.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Invalid credentials'); // Display error in the component
    }
  };
  

  return (
    <div className="container">
      <div className="overlay">
        <div className="loginBox">
          <div className="loginBoxTop">
            <h2 className="title">Login</h2>
            <p className="subtitle">Authorized Access Only</p>
          </div>
          <form className="form" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Dropdown to select role */}
            <select
              className="input"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="admin">Admin</option>
              <option value="productionmanager">Production Manager</option>
              <option value="inventorymanager">Inventory Manager</option>
            </select>

            <button type="submit" className="button">
              Login
            </button>
          </form>

          {/* Display error message if any */}
          {error && <p className="error-message">{error}</p>}

          <a href="#" className="forgotPassword">Forgot password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
