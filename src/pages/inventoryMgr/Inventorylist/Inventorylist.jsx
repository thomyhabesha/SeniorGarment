import React, { useState } from "react";
import "./Inventorylist.css";
import Sidebar from '../../../components/sidebar/Sidebar'
import ProdDashhead from '../../../components/ProdDashhead/ProdDashhead'

function Inventorylist() {

  const [popup, setpopup]=useState(false)
  const [popup2, setpopup2]=useState(false)
  const [Status, setStatus] = useState('');
  const [Priority, setPriority] = useState('');
  const handleChange = (event) => {
    setStatus(event.target.value);
};

const data=[
    {
        name:'',
        Catagory:'',
Quantity:'',
Status:'',
    },
    {
        name:'',
        Catagory:'',
Quantity:'',
Status:'',
    },
    {
        name:'',
        Catagory:'',
Quantity:'',
Status:'',
    },
    {
        name:'',
        Catagory:'',
Quantity:'',
Status:'',
    },
    {
        name:'',
        Catagory:'',
Quantity:'',
Status:'',
    },
    {
        name:'',
        Catagory:'',
Quantity:'',
Status:'',
    },
    {
        name:'',
        Catagory:'',
Quantity:'',
Status:'',
    },
]

  return (
    <div className="dashboard-container bg-slate-300">
      <Sidebar user="inventory" />
      <main className="main-content">
      <header>
        <h1  className="mainH2">Dashboard</h1>
        </header>
        <div className="prodwrap">
         <section className="container-section prodcntainer-section">
         <div className="table-wrapper">
          <div className="filter">
            <p>Filter</p>
            <input type="text"/>
          </div>
             <table className="productionDash">
         <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Quantity</th>
          <th>Status</th>
          
         </tr>

        {
            data.map(item=>{
                return(
                    <tr>
                    
                    <td>{item.name}</td>
                    <td>{item.Catagory}</td>
                    <td>{item.Quantity}</td>
                    <td>{item.Status}</td>
                    
                   </tr>
                )
            })
        }

         
          </table>
          </div>
        </section>


        </div>
      </main>

      
    </div>
  );
}

export default Inventorylist;
