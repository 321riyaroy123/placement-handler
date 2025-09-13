import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import Analytics from "./Analytics";
import Overview from "./Overview";
import Schedule from "./Schedule";
import OfferUpload from "./offerUpload"; // ✅ correct import

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route -> Login */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Other pages */}
        <Route path="/landing" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/offer-upload" element={<OfferUpload />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </Router>
  );
}

export default App;
