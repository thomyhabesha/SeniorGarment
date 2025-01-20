import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Dashboard.css";
import Sidebar from '../../../components/sidebar/Sidebar'
import ProdDashhead from '../../../components/ProdDashhead/ProdDashhead'
import imgProgress from '../../../assets/garmentImg/progres-removebg-preview.png'
import imgchart from '../../../assets/garmentImg/progress_removebg-preview.png'
function DashboardInventory() {

    const [resources, setResources] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
      const fetchResources = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/resources');
          setResources(response.data);
        } catch (error) {
          console.error('Error fetching resources:', error);
        }
      };
  
      fetchResources();
    }, []);

    
  const filteredResources = resources.filter((resource) =>
    resource.ResourcesName.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="dashboard-container bg-slate-300">
      <Sidebar user="inventory" />
      <main className="main-content">
      <header>
        <h1  className="mainH2">Dashboard</h1>
        </header>
        <section className="container-section prodcntainer-section">
          
          <div className="InveDashTop">
          <div className="productionChart">
          <ProdDashhead heading="Dashboard" user="inventory"/>
          </div>
          

          <div className='inventory'>
          <div>
        <input
          type="text"
          placeholder="Search resources..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='inputsearch'
        />
      </div>
      <table className="productionDash">
         <tr>
          <th>Item</th>
          <th>Quantity</th>
          
         </tr>
         <tbody>
        {filteredResources.length > 0 ? (
              filteredResources.map((resource) => (
                <tr
                  key={resource.id}
                  style={{
                    backgroundColor: resource.quantity < 10 ? 'red' : 'white',
                    color: resource.quantity < 10 ? 'white' : 'black',
                  }}
                >
                  <td style={{ padding: '8px' }}>{resource.ResourcesName}</td>
                  <td style={{ padding: '8px' }}>
                    {resource.quantity === 0 ? (
                      <span style={{ fontWeight: 'bold' }}>Out of Stock</span>
                    ) : (
                      resource.quantity
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" style={{ textAlign: 'center', padding: '16px' }}>
                  No resources found.
                </td>
              </tr>
            )}
      </tbody>

         
          </table>
          </div>
          </div>

          
          </section>
          
        
      </main>
    </div>
  );
}

export default DashboardInventory;
