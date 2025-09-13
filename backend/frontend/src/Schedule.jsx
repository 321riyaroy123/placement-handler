import React from "react";
import { Link } from "react-router-dom";

const Schedule = () => {
  return (
    <div className="schedule-page">
      <style>{`
        body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f4f7f9;
      margin: 0;
      color: #333;
      width: 100vw;
    }

    /* Header */
    .header {
      background-color: #007bff;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem 3vw;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .header .logo {
      font-size: 1.8rem;
      font-weight: 600;
    }

    .header a {
      color: white;
      text-decoration: none;
      font-weight: 500;
      font-size: 1rem;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      transition: background-color 0.3s;
    }

    .header a:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }

    /* Hero Section */
    .hero {
      text-align: center;
      padding: 4rem 2rem;
    }

    .hero h1 {
      font-size: 3rem;
      color: #0056b3;
      margin-bottom: 0.5rem;
    }

    .hero p {
      font-size: 1.25rem;
      color: #666;
      max-width: 700px;
      margin: 0 auto;
    }

    /* Form Section */
    .main {
      display: flex;
      justify-content: center;
      padding: 2rem;
    }

    form {
      background-color: white;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      padding: 2rem;
      max-width: 500px;
      width: 100%;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    form:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.15);
    }

    h2 {
      color: #007bff;
      margin-bottom: 1rem;
    }

    .form-group {
      margin-bottom: 15px;
    }

    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }

    input[type="text"],
    input[type="date"],
    input[type="file"] {
      width: 100%;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }

    .file-info {
      margin-top: 5px;
      font-style: italic;
      color: #555;
    }

    button {
      margin-top: 15px;
      padding: 10px 15px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
    }

    button:hover {
      background-color: #0056b3;
    }

    /* Footer */
    footer {
      text-align: center;
      padding: 1.5rem;
      background-color: #007bff;
      color: white;
      margin-top: 30px;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .header {
        flex-direction: column;
        padding: 1rem;
      }

      .hero h1 {
        font-size: 6vw;
      }

      .hero p {
        font-size: 4vw;
      }

      form {
        padding: 1.5rem;
      }
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





