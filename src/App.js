// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Register from "./pages/register/Register";
import UserMng from "./pages/userMng/UserMng";
import Settings from "./pages/settings/Settings";
import './App.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/UserMng" element={<UserMng />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
