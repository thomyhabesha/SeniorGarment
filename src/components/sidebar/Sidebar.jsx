import React, { useState, useEffect } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { MdModeEditOutline } from "react-icons/md";
import { CiSettings, CiBoxList } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { TiFlowMerge } from "react-icons/ti";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { MdOutlineReport } from "react-icons/md";
import { GiTalk } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./Sidebar.css";

import { useNavigate } from 'react-router-dom';

const Sidebar = ({ user }) => {
  // Retrieve and parse user data from localStorage
  const userinfo = JSON.parse(localStorage.getItem("user")) || {};
 const navigate = useNavigate();
  // State hooks for user data
  const [userfname, setFname] = useState(userinfo.Fname || "");
  const [userlname, setLname] = useState(userinfo.Lname || "");
  const [userrole, setRole] = useState(user || ""); // Fallback role


  const logout =()=>{
    localStorage.clear('user');
    navigate('/'); // Store user data in localStorage

  }
  // Menu items for each user role
  const menuItems = {
    productionmgr: [
      { icon: <AiOutlineDashboard />, label: "Dashboard", link: "/DashboardProduction" },
      { icon: <RiCalendarScheduleLine />, label: "Production Schedule", link: "/ProductionSchedule" },
      { icon: <TiFlowMerge />, label: "Workflow", link: "/WorkflowVisualize" },
      { icon: <GiTalk />, label: "Communication", link: "/Communication" },
      { icon: <CiSettings />, label: "Settings", link: "/ProdSettings" },
    ],
    admin: [
      { icon: <AiOutlineDashboard />, label: "Dashboard", link: "/DashboardAdmin" },
      { icon: <IoMdAdd />, label: "Register", link: "/Register" },
      { icon: <MdModeEditOutline />, label: "User Management", link: "/UserMng" },
      { icon: <CiSettings />, label: "Settings", link: "/AdminSettings" },
    ],
    inventory: [
      { icon: <AiOutlineDashboard />, label: "Dashboard", link: "/DashboardInventory" },
      { icon: <CiBoxList />, label: "Inventory List", link: "/InventoryList" },
      { icon: <MdModeEditOutline />, label: "Order", link: "/Order" },
      { icon: <MdOutlineReport />, label: "Report", link: "/Report" },
      { icon: <CiSettings />, label: "Settings", link: "/AdminSettings" },
    ],
  };

  return (
    <aside className="sidebar">
      {/* User Information */}
      <div className="user-info">
        <span className="user-icon">
          <FaUser color="rgb(210, 210, 210)" />
        </span>
        <div className="user-details">
          <h3>{`${userfname} ${userlname}`.trim()}</h3>
          <p>
            {userrole === "productionmgr"
              ? "Production Manager"
              : userrole === "inventory"
              ? "Inventory Manager"
              : "Admin"}
          </p>
        </div>
      </div>

      {/* Role-Specific Menu */}
      {menuItems[userrole] ? (
        <ul className="menu">
          {menuItems[userrole].map((item, index) => (
            <li key={index} className="menu-item">
              {item.icon}
              <Link to={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No menu available for this role</p>
      )}

      {/* Logout Button */}
      <button onClick={logout} className="logout-btn">
        <IoIosLogOut className="sideIcons" /> Logout
      </button>
    </aside>
  );
};

export default Sidebar;
