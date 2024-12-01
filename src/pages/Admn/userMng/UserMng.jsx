import React, { useState } from "react";
import "./UserMng.css";
import Sidebar from '../../../components/sidebar/Sidebar';
import DashHead from '../../../components/dashHead/DashHead';

function UserMng() {
  const [users, setUsers] = useState([
    { id: 'PR02', name: 'Tamene Natneal', role: 'Production Manager', status: 'InActive' },
    { id: 'IN120', name: 'Tamene Natneal', role: 'Inventory Manager', status: 'Active' },
    { id: 'EM01', name: 'Tamene Natneal', role: 'Employee', status: 'InActive' },
    { id: 'EM02', name: 'Tamene Natneal', role: 'Employee', status: 'Active' },
    { id: 'EM03', name: 'Kidus Haile', role: 'Employee', status: 'Active' },
    { id: 'EM04', name: 'Nahom Said', role: 'Employee', status: 'Active' },
    { id: 'EM05', name: 'Helen Telaun', role: 'Employee', status: 'InActive' },
    { id: 'EM06', name: 'Nahom Said', role: 'Employee', status: 'Active' }
  ]);
  
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleEdit = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const handleRemove = (user) => {
    setSelectedUser(user);
    setIsRemoveModalOpen(true);
  };

  const handleModalClose = () => {
    setIsEditModalOpen(false);
    setIsRemoveModalOpen(false);
    setSelectedUser(null);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSelectedUser({ ...selectedUser, [name]: value });
  };

  const handleUpdate = () => {
    const updatedUsers = users.map(user => 
      user.id === selectedUser.id ? selectedUser : user
    );
    setUsers(updatedUsers);
    handleModalClose();
    alert(`Updated user with ID: ${selectedUser.id}`);
  };

  const confirmRemove = () => {
    const updatedUsers = users.filter(user => user.id !== selectedUser.id);
    setUsers(updatedUsers);
    handleModalClose();
    alert(`Removed user with ID: ${selectedUser.id}`);
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      
      <main className="main-content">
        <DashHead heading='User Management' />
        <section className="container-section">
          <h3>Modify User</h3>
          <div className="table-container">
            <table className="user-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.role}</td>
                    <td>{user.status}</td>
                    <td>
                      <button onClick={() => handleEdit(user)} className="edit-button">Edit</button>
                      <button onClick={() => handleRemove(user)} className="remove-button">Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Modal for Editing User */}
          {isEditModalOpen && (
            <div className="modal-overlay">
              <div className="modal-content">
                <h4>Edit User</h4>
                <label>ID:</label>
                <input type="text" value={selectedUser.id} readOnly />
                <label>Name:</label>
                <input 
                  type="text" 
                  name="name" 
                  value={selectedUser.name} 
                  onChange={handleInputChange} 
                />
                <label>Role:</label>
                <select 
                  name="role" 
                  value={selectedUser.role} 
                  onChange={handleInputChange} 
                >
                  <option value="Production Manager">Production Manager</option>
                  <option value="Inventory Manager">Inventory Manager</option>
                  <option value="Employee">Employee</option>
                  {/* Add other roles as needed */}
                </select>
                <label>Status:</label>
                <input 
                  type="text" 
                  name="status" 
                  value={selectedUser.status} 
                  onChange={handleInputChange} 
                />
                <button onClick={handleUpdate} className="update-button">Update</button>
                <button onClick={handleModalClose} className="close-button">Close</button>
              </div>
            </div>
          )}

          {/* Modal for Confirming Removal of User */}
          {isRemoveModalOpen && (
            <div className="modal-overlay">
              <div className="modal-content">
                <h4>Remove User</h4>
                <p>Are you sure you want to remove the following user?</p>
                <label>ID: {selectedUser.id}</label>
                <label>Name: {selectedUser.name}</label>
                <div className="modal-buttons">
                  <button onClick={confirmRemove} className="confirm-remove-button">Yes, Remove</button>
                  <button onClick={handleModalClose} className="close-button">Cancel</button>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default UserMng;
