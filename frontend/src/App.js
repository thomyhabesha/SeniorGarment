// App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Login";
import DashboardAdmin from "./pages/Admn/dashboard/DashboardAdmin";
import DashboardProdction from "./pages/productionMgr/dashboard/DashboardProdction";
import DashboardInventory from "./pages/inventoryMgr/dashboard/DashboardInventory";
import WasteManage from "./pages/inventoryMgr/wasteManage/WasteManage";
import WorkflowVisualize from "./pages/productionMgr/workflowVisualize/WorkflowVisualize";
import Register from "./pages/Admn/register/Register";
import UserMng from "./pages/Admn/userMng/UserMng";
import AdminSettings from "./pages/Admn/settings/AdminSettings";
import ProdSettings from "./pages/productionMgr/settings/ProdSettings";
import ProductionSchedule from "./pages/productionMgr/productionSchedule/ProductionSchedule";
import ActivityLogs from "./pages/Admn/activitylogs/ActivityLogs";
import ForgotPassword from "./components/forgetpassword/ForgotPassword";
import ProtectedRoute from './components/protectedroute/ProtectedRoute';
import Communication from './components/communication/Communication';
import MessageButtons from './components/communication/MessageButtons';
import './App.css';




function SessionCheck() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = () => {
      const user = sessionStorage.getItem("user");
      if (user) {
        const parsedUser = JSON.parse(user);
        const loginTime = parsedUser.loginTime;
        const oneDay = 24 * 60 * 60 * 1000;; // 1 minute in milliseconds

        if (Date.now() - loginTime > oneDay) {
          sessionStorage.clear();
          alert("Your session has expired. Please log in again.");
          navigate("/", { replace: true });
        }
      }
    };

    
    const interval = setInterval(checkSession, 10 * 1000);

    return () => clearInterval(interval);
  }, [navigate]);

  return null; 
}



function App() {
  return (
    <div className="App">
      <Router>
        <SessionCheck /> 
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/DashboardAdmin" element={<DashboardAdmin />} />
            <Route path="/DashboardProdction" element={<DashboardProdction />} />
            <Route path="/DashboardInventory" element={<DashboardInventory />} />
            <Route path="/WorkflowVisualize" element={<WorkflowVisualize />} />
            <Route path="/WasteManage" element={<WasteManage />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/UserMng" element={<UserMng />} />
            <Route path="/AdminSettings" element={<AdminSettings />} />
            <Route path="/ProdSettings" element={<ProdSettings />} />
            <Route path="/communication" element={<Communication />} />
            <Route path="/ProductionSchedule" element={<ProductionSchedule />} />
            <Route path="/activityLogs" element={<ActivityLogs />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/messageButtons" element={<MessageButtons />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;