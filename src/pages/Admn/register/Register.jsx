import React, {useState} from "react";
import "./Register.css";
import Sidebar from '../../../components/sidebar/Sidebar'
import DashHead from '../../../components/dashHead/DashHead'

function Register() {
  const [role, setRole] = useState('');

  const handleChange = (event) => {
      setRole(event.target.value);
  };

  return (
    <div className="dashboard-container">
      <Sidebar user="admin"/>
      
      <main className="main-content">
        <DashHead
        heading='Register'
        />
        <section className="container-section">
            <h3>Register new user</h3>
        <div className="registerForm">
            <form>
          <input type="First Name" placeholder="First Name" className="input" />
          <input type="Last Name" placeholder="Last Name" className="input" />
         <input type="Email" placeholder="Email" className="input" />
          <input type="Department" placeholder="Department" className="input" />
          <input type="Contact No" placeholder="Contact No" className="input" />
          <div className="role-select">
            <select className="input" id="role" value={role} onChange={handleChange}>
                <option value="">Role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
                <option value="manager">Manager</option>
                <option value="employee">Employee</option>
            </select>
            {/* Display selected role for demonstration */}
            {role && <p>Selected Role: {role}</p>}
        </div>
          
            </form>
  <button className="button">Register</button>
        </div>
        </section>
      </main>
    </div>
  );
}

export default Register;
