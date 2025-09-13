import React from "react";
import { Link } from "react-router-dom";

const Schedule = () => {
  return (
    <div className="schedule-page">
      <style>{`
        body {
      margin: 0;
      font-family: Arial, sans-serif;
      background-color: #FFE2E2;
    }

    .header {
      background-color: #6a0dad;
      color: white;
      display: flex;
      justify-content: space-between;
      padding: 15px 30px;
      font-size: 18px;
    }

    .sidebar {
      background-color: #FFE2E2;
      padding: 20px;
      width: 200px;
      height: 100vh;
      position: fixed;
      border-right: 2px solid #7d7373;
    }

    .sidebar a {
      display: block;
      margin-bottom: 10px;
      text-decoration: none;
      color: #000;
      font-weight: bold;
    }

    .sidebar a.active {
      color: #6a0dad;
      text-decoration: underline;
    }

    .main {
      margin-left: 220px;
      padding: 40px;
    }

    h2 {
      color: #6a0dad;
      margin-bottom: 20px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      background: white;
      box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    }

    th, td {
      padding: 12px 15px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }

    th {
      background-color: #6a0dad;
      color: white;
    }

    tr:hover {
      background-color: #f3d9ff;
    }
      `}</style>
      
      {/* Top Header */}
      <div className="header">
        <div className="logo">PLACEMENT CELL</div>
        <div>
          <Link to="/overview" className="nav-link">
            Overview
          </Link>
        </div>
      </div>

      {/* Page Layout */}
      <div className="main-layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <nav className="sidebar-nav">
            <a href="/dashboard">Student Details</a>
  <a href="/analytics">Analytics</a>
  <a href="/offer-upload">Offer Letters</a> {/* new link */}
  <a href="/landing">Dashboard</a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <h2 className="main-title">Upcoming Placement Schedule</h2>
          
          <div className="schedule-table-container">
            <table className="schedule-table">
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Date</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Company A</td>
                  <td>02/06/2025</td>
                  <td>Software Engineer</td>
                </tr>
                <tr>
                  <td>Company B</td>
                  <td>05/06/2025</td>
                  <td>Data Analyst</td>
                </tr>
                <tr>
                  <td>Company C</td>
                  <td>09/06/2025</td>
                  <td>Network Administrator</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};


export default Schedule;






