import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./Login";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import Analytics from "./Analytics";
import Overview from "./Overview";
import Schedule from "./Schedule";
import Register from "./Register";
import OfferUpload from "./offerUpload"; // ✅ make sure this file exists

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root to login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Main app routes */}
        <Route path="/landing" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/offer-upload" element={<OfferUpload />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/schedule" element={<Schedule />} />

        {/* Catch-all: redirect unknown routes to login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
