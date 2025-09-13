import React from "react";
import { Link } from "react-router-dom";

const Overview = () => {
  return (
    <div className="overview-page">
      <style>{`
        /* General Body & Layout Styles */
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f4f7f9;
          color: #333;
          width:100vw;
        }

        .overview-page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          width:100vw;
        }

        /* Header */
        .header {
          background-color: #007bff;
          color: white;
          padding: 1.5rem 3vw;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .header h1 {
          font-size: 1.8vw;
          font-weight: 600;
          letter-spacing: 1px;
          margin: 0;
        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 1.5rem;
          margin: 0;
          padding: 0;
        }

        .nav-links li a {
          color: white;
          text-decoration: none;
          font-size: 1vw;
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          transition: background-color 0.3s;
        }

        .nav-links li a:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }

        /* Main Content */
        .main-content {
          flex: 1;
          padding: 2rem;
        }

        .grid-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 1.5rem;
        }

        /* Card Styles */
        .card {
          background-color: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
        }

        .card h3 {
          margin-top: 0;
          color: #007bff;
          font-weight: 600;
          font-size: 1.5rem;
        }

        .card .metric {
          font-size: 2.5rem;
          font-weight: bold;
          color: #2c3e50;
          margin: 0.5rem 0 0;
        }
        
        /* Activity List */
        .activity-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .activity-list li {
          font-size: 1rem;
          padding: 0.75rem 0;
          border-bottom: 1px solid #eee;
        }
        
        .activity-list li:last-child {
          border-bottom: none;
        }

        .upcoming-list li {
          font-size: 1rem;
          padding: 0.75rem 0;
          border-bottom: 1px solid #eee;
        }
        
        .upcoming-list li:last-child {
          border-bottom: none;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .header {
            flex-direction: column;
            padding: 1rem;
            align-items: flex-start;
          }

          .header h1 {
            font-size: 5vw;
            margin-bottom: 1rem;
          }

          .nav-links {
            flex-direction: column;
            gap: 0.5rem;
          }

          .nav-links li a {
            font-size: 3.5vw;
          }
          
          .main-content {
            padding: 1rem;
          }

          .grid-container {
            grid-template-columns: 1fr;
          }

          .card {
            min-width: unset;
          }
        }
      `}</style>

      <header className="header">
        <h1>PLACEMENT OVERVIEW</h1>
        <nav>
          <ul className="nav-links">
            <li><Link to="/dashboard">Student Details</Link></li>
            <li><Link to="/schedule">Schedule</Link></li>
            <li><Link to="/analytics">Analytics</Link></li>
            <li><Link to="/landing">Dashboard</Link></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <div className="grid-container">
          {/* Main Stats Cards */}
          <div className="card">
            <h3>Registered Companies</h3>
            <p className="metric">12</p>
          </div>
          <div className="card">
            <h3>Eligible Students</h3>
            <p className="metric">156</p>
          </div>
          <div className="card">
            <h3>Pending Interviews</h3>
            <p className="metric">23</p>
          </div>

          {/* Activity Section */}
          <div className="card">
            <h3>Recent Activity</h3>
            <ul className="activity-list">
              <li>Undedral arrived – 7 minutes ago</li>
              <li>Activation received – 10 minutes ago</li>
              <li>New notification – 17 minutes ago</li>
            </ul>
          </div>

          {/* Upcoming Interviews Section */}
          <div className="card">
            <h3>Upcoming Interviews</h3>
            <ul className="upcoming-list">
              <li>Today: Marine Researchers</li>
              <li>Tomorrow: Night Watch</li>
              <li>Wednesday: Ranch Fire</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};


export default Overview;
