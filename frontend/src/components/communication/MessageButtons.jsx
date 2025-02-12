import React, { useState, useEffect } from 'react';
import Communication from './Communication';
import './MessageButtons.css'; // Import the custom CSS
import DashHead from '../dashHead/DashHead';
import Sidebar from '../sidebar/Sidebar';

function MessageButtons() {
  const sessionData = JSON.parse(sessionStorage.getItem('user'));
  const storedUserID = sessionData.UserID;
  const [selectedUser, setSelectedUser] = useState(storedUserID);
  const [userID, setUserID] = useState(null);

  console.log("user: ", storedUserID);

  useEffect(() => {
    setUserID(storedUserID);
  }, [storedUserID]);

  const handleClick = (receiverId) => {
    setSelectedUser(receiverId);
  };


  return (
    <div className="dashboard-container bg-slate-300">
      <Sidebar user={userID == 1?'Admin':userID == 2?'productionmgr':userID == 3?'inventory':''} />
      <main className="main-content">
        <DashHead heading="communication" user={userID == 1?'productionmgr':userID == 2?'':userID == 3?'inventory':''} />
        <section className="container-section">

    <div className="message-buttons-container">
      <div className="button-column">
        {userID !== 1 && <button onClick={() => handleClick(1)} className="message-button">Admin</button>}
        {userID !== 2 && <button onClick={() => handleClick(2)} className="message-button">Production Manager</button>}
        {userID !== 3 && <button onClick={() => handleClick(3)} className="message-button">Inventory Manager</button>}
      </div>

      {selectedUser && (
        <Communication receiverId={selectedUser} />
      )}
    </div>
    </section>
    </main>
    </div>
  );
}

export default MessageButtons;
