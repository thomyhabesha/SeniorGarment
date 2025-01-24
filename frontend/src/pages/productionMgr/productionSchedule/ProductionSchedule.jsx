import React, { useState, useEffect } from 'react';
import './ProductionSchedule.css';
import Sidebar from '../../../components/sidebar/Sidebar';
import DashHead from '../../../components/dashHead/DashHead';
import Settings from '../../../components/settings/Settings';

function ProductionSchedule() {
  const [popup, setPopup] = useState(false);
  const [popup2, setPopup2] = useState(false);
  const [createStatusPopup, setcreateStatusPopup] = useState(false);
  const [editStatusPopup, setEditStatusPopup] = useState(false);
  const [editStatusMessage, setEditStatusMessage] = useState('');
  const [createStatusMessage, setcreateStatusMessage] = useState('');
  const [data, setData] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [teams, setTeams] = useState([]);
  const [formDataCreate, setformDataCreate] = useState({
    Task_name: '',
    Priorty: '',
    Task_Status: '',
    TeamID: '',
    StartDate: '',
    EndDate: '',
    Task_Description: '',
  });
  const [formData, setFormData] = useState({
    Task: '',
    Priorty: '',
    Team: '',
    Task_Status: '',
    startingTime: '',
    EndingTime: '',
  });

  useEffect(() => {
    fetch('http://localhost:5000/api/production-schedule')
      .then((response) => response.json())
      .then((fetchedData) => setData(fetchedData))
      .catch((error) => console.error('Error fetching production schedule:', error));
  }, []);

  const handleEditClick = (task) => {
    setSelectedTask(task);
    setFormData({
      Task: task.Task,
      Priorty: task.Priorty,
      Team: task.Team,
      Task_Status: task.Task_Status,
      startingTime: task.startingTime,
      EndingTime: task.EndingTime,
    });
    setPopup(true);
  };

  const handleSubmit = () => {
    fetch(`http://localhost:5000/api/production-scheduleUpdate/${selectedTask.Task}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) throw new Error('Failed to update task');
        return response.json();
      })
      .then(() => {
        setPopup2(false);
        setEditStatusMessage('Task updated successfully!');
        setEditStatusPopup(true);
        // Refresh the data
        return fetch('http://localhost:5000/api/production-schedule')
          .then((response) => response.json())
          .then((fetchedData) => setData(fetchedData));
      })
      .catch(() => {
        setPopup2(false);
        setEditStatusMessage('Failed to update task. Please try again.');
        setEditStatusPopup(true);
      });
  };





 
  useEffect(() => {
    // Fetch teams
    fetch('http://localhost:5000/api/teams')
      .then((response) => response.json())
      .then((data) => {
          setTeams(data);    // Set the state with fetched data
          console.log(data); // Log data
      })
      .catch((error) => console.error('Error fetching teams:', error));
  }, []);
  

  const handleSubmitCreateTask = () => {
    fetch('http://localhost:5000/api/create-task-schedule', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDataCreate),
    })
      .then((response) => {
        if (!response.ok) throw new Error('Failed to create task');
        return response.json();
      })
      .then(() => {
        setPopup2(false);
        setcreateStatusMessage('Task created successfully!')
        setcreateStatusPopup(true);
      })
      .catch((error) => {
        console.error('Error:', error);
        setPopup2(false);
        setcreateStatusMessage('Failed to create task!')
        setcreateStatusPopup(true);
      });
  };




  return (
    <div className="dashboard-container bg-slate-300">
      <Sidebar user="productionmgr" />
      <main className="main-content">
        <DashHead heading="Production Schedule" user="productionmgr" />
        <div className="prodwrap">
          <section className="container-section prodcntainer-section">
            <div className="table-wrapper">
              <table className="productionDash">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Task</th>
                    <th>Priority</th>
                    <th>Team</th>
                    <th>Status</th>
                    <th>Start date</th>
                    <th>End date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.Task}</td>
                      <td>{item.Task_name}</td>
                      <td>{item.Priorty}</td>
                      <td>{item.Team}</td>
                      <td>{item.Task_Status}</td>
                      <td>{item.startingTime}</td>
                      <td>{item.EndingTime}</td>
                      <td>
                        <button onClick={() => handleEditClick(item)}>Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            

          </section>
          <div  className='createBtn'>

              <button onClick={() => setPopup2(true)}>Create Task</button>
          </div>

          {popup && (
            <div className="popup">
              <form>
                <label>
                  Task:
                  <input type="text" value={formData.Task} readOnly />
                </label>
                <label>
                  Priority:
                  <select
                    value={formData.Priorty}
                    onChange={(e) => setFormData({ ...formData, Priorty: e.target.value })}
                  >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </label>
                <label>
                  Status:
                  <select
                    value={formData.Task_Status}
                    onChange={(e) => setFormData({ ...formData, Task_Status: e.target.value })}
                  >
                    <option value="Not Started">Not Started</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Blocked">Blocked</option>
                    <option value="Completed">Completed</option>
                  </select>
                </label>
                <label>
                  Start Date:
                  <input
                    type="datetime-local"
                    value={formData.startingTime}
                    onChange={(e) => setFormData({ ...formData, startingTime: e.target.value })}
                  />
                </label>
                <label>
                  End Date:
                  <input
                    type="datetime-local"
                    value={formData.EndingTime}
                    onChange={(e) => setFormData({ ...formData, EndingTime: e.target.value })}
                  />
                </label>
                <button type="button" onClick={handleSubmit}>
                  Save
                </button>
                <button type="button" onClick={() => setPopup(false)}>
                  Cancel
                </button>
              </form>
            </div>
          )}


{popup2 && (
  <div className="popup">
    <form>
      
      <label>
        Priorty:
        <select
          value={formDataCreate.Priorty}
          onChange={(e) => setformDataCreate({ ...formDataCreate, Priorty: e.target.value })}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </label>
      <label>
        Status:
        <select
          value={formDataCreate.Task_Status}
          onChange={(e) => setformDataCreate({ ...formDataCreate, Task_Status: e.target.value })}
        >
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Blocked">Blocked</option>
          <option value="Completed">Completed</option>
        </select>
      </label>
      <label>
        Team:
        <select
          value={formDataCreate.TeamID}
          onChange={(e) => setformDataCreate({ ...formDataCreate, TeamID: e.target.value })}
        >
          {teams.map((team) => (
            <option key={team.TeamID} value={team.TeamID}>
              {team.Team_name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Start Date:
        <input
          type="datetime-local"
          value={formDataCreate.StartDate}
          onChange={(e) => setformDataCreate({ ...formDataCreate, StartDate: e.target.value })}
        />
      </label>
      <label>
        End Date:
        <input
          type="datetime-local"
          value={formDataCreate.EndDate}
          onChange={(e) => setformDataCreate({ ...formDataCreate, EndDate: e.target.value })}
        />
      </label>
      <label>
                Task_Description:
                <textarea
                  value={formData.Task_Description}
                  onChange={(e) => setFormData({ ...formData, Task_Description: e.target.value })}
                  placeholder="Enter a detailed Task_Description of the task..."
                />
              </label>
      <button type="button" onClick={handleSubmitCreateTask}>
        Save
      </button>
      <button type="button" onClick={() => setPopup2(false)}>
        Cancel
      </button>
    </form>
  </div>
)}
          {editStatusPopup && (
            <div className="status-popup">
              <p>{editStatusMessage}</p>
              <button onClick={() => setEditStatusPopup(false)}>Close</button>
            </div>
          )}
          {createStatusPopup && (
            <div className="status-popup">

              <p>{createStatusMessage}</p>
              <button onClick={() => setcreateStatusPopup(false)}>Close</button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default ProductionSchedule;






