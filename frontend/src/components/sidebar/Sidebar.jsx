import React, { useState, useEffect } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { MdModeEditOutline } from "react-icons/md";
import { CiSettings, CiBoxList } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { TiFlowMerge } from "react-icons/ti";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { RxActivityLog } from "react-icons/rx";
import { GiTalk } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./Sidebar.css";

import { useNavigate } from 'react-router-dom';

const Sidebar = ({ user }) => {
  
  const userinfo = JSON.parse(sessionStorage.getItem("user")) || {};
 
 const navigate = useNavigate();
 
  const [userfname, setFname] = useState(userinfo.Fname || "");
  const [userlname, setLname] = useState(userinfo.Lname || "");
  const [userrole, setRole] = useState(user?.toLowerCase() || ""); 


  useEffect(() => {
    console.log("Updated userrole:", user.toLowerCase());
    setRole(user.toLowerCase());
  }, [user]);
  
  console.log("Sidebar userrole:", userrole);


  const logout =()=>{
    sessionStorage.clear('user');
    
    navigate('/'); 

  }
 
  const menuItems = {
    productionmgr: [
      { icon: <AiOutlineDashboard />, label: "Dashboard", link: "/DashboardProdction" },
      { icon: <RiCalendarScheduleLine />, label: "Production Schedule", link: "/ProductionSchedule" },
      { icon: <TiFlowMerge />, label: "Workflow", link: "/WorkflowVisualize" },
      { icon: <GiTalk />, label: "Communication", link: "/messageButtons" },
      { icon: <CiSettings />, label: "Settings", link: "/ProdSettings" },
    ],
    admin: [
      { icon: <AiOutlineDashboard />, label: "Dashboard", link: "/DashboardAdmin" },
      { icon: <IoMdAdd />, label: "Register", link: "/Register" },
      { icon: <MdModeEditOutline />, label: "User Management", link: "/UserMng" },
      { icon: <GiTalk />, label: "Communication", link: "/messageButtons" },
      { icon: <RxActivityLog />, label: "Activity logs", link: "/activityLogs" },
      { icon: <CiSettings />, label: "Settings", link: "/AdminSettings" },
    ],
    inventory: [
      { icon: <AiOutlineDashboard />, label: "Dashboard", link: "/DashboardInventory" },
      { icon: <CiBoxList />, label: "Defects", link: "/WasteManage" },
      { icon: <GiTalk />, label: "Communication", link: "/messageButtons" },
      { icon: <CiSettings />, label: "Settings", link: "/#" },
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
