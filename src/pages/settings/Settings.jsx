import React, {useState} from "react";
import "./Settings.css";
import Sidebar from '../../components/sidebar/Sidebar'
import DashHead from '../../components/dashHead/DashHead'

function Settings() {
  const [role, setRole] = useState('');

  const handleChange = (event) => {
      setRole(event.target.value);
  };

  return (
    <div className="dashboard-container">
      <Sidebar/>
      
      <main className="main-content">
        <DashHead
        heading='Settings'
        />
        <section className="container-section">
            <h3>Modify Account</h3>
        <div className="registerForm">
            <form>
          <input type="First Name" placeholder="First Name" className="input" />
          <input type="Last Name" placeholder="Last Name" className="input" />
         <input type="Email" placeholder="Email" className="input" />
          <input type="Old Password" placeholder="Old Password" className="input" />
          <input type="New Password" placeholder="New Password" className="input" />
         
          
            </form>
  <button className="button">Update</button>
        </div>
        </section>
      </main>
    </div>
  );
}

export default Settings;
