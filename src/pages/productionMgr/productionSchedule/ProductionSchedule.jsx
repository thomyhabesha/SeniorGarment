import React, { useState } from "react";
import "./ProductionSchedule.css";
import Sidebar from '../../../components/sidebar/Sidebar'
import ProdDashhead from '../../../components/ProdDashhead/ProdDashhead'

function ProductionSchedule() {

  const [popup, setpopup]=useState(false)
  const [popup2, setpopup2]=useState(false)
  const [Status, setStatus] = useState('');
  const [Priority, setPriority] = useState('');
  const handleChange = (event) => {
    setStatus(event.target.value);
};

const data=[
    {
        Task:'',
Priority:'P0',
Quantity:'',
Status:'Not started',
Startdate:'',
Enddate:'',
Milestone:'',
Deliverable:'',

    },
    {
        Task:'',
Priority:'P1',
Quantity:'',
Status:'Not started',
Startdate:'',
Enddate:'',
Milestone:'',
Deliverable:'',

    },
    {
        Task:'',
Priority:'P2',
Quantity:'',
Status:'In progress',
Startdate:'',
Enddate:'',
Milestone:'',
Deliverable:'',

    },
    {
        Task:'',
Priority:'P3',
Quantity:'',
Status:'Not started',
Startdate:'',
Enddate:'',
Milestone:'',
Deliverable:'',

    },
    {
        Task:'',
Priority:'P4',
Quantity:'',
Status:'Not started',
Startdate:'',
Enddate:'',
Milestone:'',
Deliverable:'',

    },
    {
        Task:'',
Priority:'P5',
Quantity:'',
Status:'Not started',
Startdate:'',
Enddate:'',
Milestone:'',
Deliverable:'',

    },
    {
        Task:'',
Priority:'P6',
Quantity:'',
Status:'Blocked',
Startdate:'',
Enddate:'',
Milestone:'',
Deliverable:'',

    },
    {
        Task:'',
Priority:'P7',
Quantity:'',
Status:'Completed',
Startdate:'',
Enddate:'',
Milestone:'',
Deliverable:'',

    },
    {
        Task:'',
Priority:'P8',
Quantity:'',
Status:'Completed',
Startdate:'',
Enddate:'',
Milestone:'',
Deliverable:'',

    },
    {
        Task:'',
Priority:'P9',
Quantity:'',
Status:'Not started',
Startdate:'',
Enddate:'',
Milestone:'',
Deliverable:'',

    },
]

  return (
    <div className="dashboard-container bg-slate-300">
      <Sidebar user="productionmgr" />
      <main className="main-content">
      <ProdDashhead heading="Dashboard" user="productionmgr"/>
        <div className="prodwrap">
         <section className="container-section prodcntainer-section">
         <div className="table-wrapper">
             <table className="productionDash">
         <tr>
          <th>Task</th>
          <th>Priority</th>
          <th>Quantity</th>
          <th>Status</th>
          <th>Start date</th>
          <th>End date</th>
          <th>Milestone</th>
          <th>Deliverable</th>
          <th>Action</th>
         </tr>

        {
            data.map(item=>{
                return(
                    <tr>
                    <td></td>
                    <td>{item.Priority}</td>
                    <td></td>
                    <td>{item.Status}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><button onClick={()=>setpopup2(true)}>Edit</button></td>
                    
                   </tr>
                )
            })
        }

         
          </table>
          </div>
        </section>

<div className="tableProdaAction">
<button onClick={()=>setpopup(true)}>Add task</button>
</div>
        </div>
      </main>

      {
        popup &&

        <div className="registerForm">
            <form>
          <input type="text" placeholder="Task"  className="input" />
          <input type=""  placeholder="Priority"  className="input" />
         <input type="text"  placeholder="Quantity"  className="input" />
          <div className="role-select">
            <select className="input" id="Status"  >
                <option value="">Status</option>
                <option value="In progress">In progress</option>
                <option value="Completed">Completed</option>
                <option value="Ended">Ended</option>
                <option value="Blocked">Blocked</option>
            </select>
        </div>

        <div className="role-select">
            <select className="input" id="Priority"  >
                <option value="">Priority</option>
                <option value="P0">P0</option>
                <option value="P1">P1</option>
                <option value="P2">P2</option>
                <option value="P3">P3</option>
                <option value="P4">P4</option>
                <option value="P5">P5</option>
                <option value="P6">P6</option>
            </select>
        </div>
          <input type="date"  placeholder="date"  className="input" />
          <input type="date"  placeholder="date"  className="input" />
          <input type="text"  placeholder="Milestone"  className="input" />
          <input type="text"  placeholder="Deliverable"  className="input" />
          <div className="role-select">
            <select className="input" id="team"  >
                <option value="">Team</option>
                <option value="Team1">Team1</option>
                <option value="Team2">Team2</option>
                <option value="Team3">Team3</option>
                <option value="Team4">Team4</option>
            </select>
        </div>
          
          
            </form>
            <div className="tableProdaAction">
  <button className="button">Add</button>
  <button onClick={()=>setpopup(false)} className="button">Close</button>
        </div>
        </div>
      }
    </div>
  );
}

export default ProductionSchedule;
