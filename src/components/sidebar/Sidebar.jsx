import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { MdModeEditOutline } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import {Link} from 'react-router-dom'

import './Sidebar.css'
const Sidebar=()=>{

    
return(
    <aside className="sidebar">
        <div className="user-info">
          <span className="user-icon"><FaUser color="rgb(210, 210, 210)"/></span>
          <div className="user-details">
            <h3>Biruk Mekonen</h3>
            <p>Admin</p>
          </div>
        </div>
          <ul className="menu">
            <li className="menu-item active"><AiOutlineDashboard className="sideIcons"/><Link to='/dashboard' > Dashboard</Link></li>
            <li className="menu-item"><IoMdAdd className="sideIcons"/><Link to='/Register' >Register</Link></li>
            <li className="menu-item"><MdModeEditOutline className="sideIcons"/><Link to='/UserMng'> User Management</Link></li>
            <li className="menu-item"><CiSettings className="sideIcons"/><Link to='/Settings'> Settings</Link></li>
          </ul>
        <button className="logout-btn"><IoIosLogOut className="sideIcons"/> Logout</button>
      </aside>
)
}

export default Sidebar;