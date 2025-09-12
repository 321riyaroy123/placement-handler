import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import Analytics from "./Analytics";
import Overview from "./Overview";
import Schedule from "./Schedule";
import Register from "./Register";

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
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </Router>
  );
}

export default App;
