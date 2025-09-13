import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';

import Login from "./Login";
import Register from "./Register";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import Analytics from "./Analytics";
import Overview from "./Overview";
import Schedule from "./Schedule";
import OfferUpload from "./OfferUpload"; // ✅ Make sure file name matches exactly

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/offer-upload" element={<OfferUpload />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/schedule" element={<Schedule />} />
    </Routes>
  );
}

export default App;
