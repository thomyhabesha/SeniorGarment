// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/DashboardAdmin" element={<DashboardAdmin />} />
        <Route path="/DashboardProdction" element={<DashboardProdction />} />
        <Route path="/DashboardInventory" element={<DashboardInventory />} />
        <Route path="/WorkflowVisualize" element={<WorkflowVisualize />} />
        <Route path="/WasteManage" element={<WasteManage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/UserMng" element={<UserMng />} />
        <Route path="/AdminSettings" element={<AdminSettings />} />
        <Route path="/ProdSettings" element={<ProdSettings />} />
        <Route path="/ProductionSchedule" element={<ProductionSchedule />} />
        <Route path="/activityLogs" element={<ActivityLogs />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

