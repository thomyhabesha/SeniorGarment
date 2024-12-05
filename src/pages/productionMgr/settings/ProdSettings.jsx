import React, {useState} from "react";
import "./ProdSettings.css";
import Sidebar from '../../../components/sidebar/Sidebar'
import ProdDashhead from '../../../components/ProdDashhead/ProdDashhead'

function ProdSettings() {
  const [role, setRole] = useState('');

  const handleChange = (event) => {
      setRole(event.target.value);
  };

  return (
    <div className="dashboard-container">
      <Sidebar user="productionmgr"/>
      
      <main className="main-content">
      <ProdDashhead heading="Dashboard" user="productionmgr"/>
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

export default ProdSettings;
