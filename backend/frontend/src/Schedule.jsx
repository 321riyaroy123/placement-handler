import React from "react";
import { Link } from "react-router-dom";

const Schedule = () => {
  return (
    <div className="schedule-page">
      <style>{`
        /* General Body & Layout Styles */
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f4f7f9;
          color: #333;
          width:100vw;
        }

        .schedule-page {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          width:100vw;
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

        .logo {
          font-size: 1.8vw;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .nav-link {
          color: white;
          text-decoration: none;
          font-size: 1vw;
          font-weight: 500;
          padding: 0.5rem 1rem;
          transition: background-color 0.3s, color 0.3s;
          border-radius: 5px;
        }

        .nav-link:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }

        /* Main Content Layout */
        
.main-layout {
  display: flex;
  min-height: 100vh;
}

/* Left Sidebar */
/* Sidebar container */
.sidebar {
  width: 20vw;
  min-width: 200px;
  background-color: #fff;
  padding: 2rem 0;
  border-right: 1px solid #e0e6ed;
  box-shadow: 2px 0 5px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
}

/* Sidebar navigation */
.sidebar-nav {
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
}

/* Sidebar links */
.sidebar-link {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
  text-decoration: none;
  color: #555;
  font-size: 1.1vw;
  font-weight: 500;
  border-radius: 8px;
  transition: background-color 0.3s, color 0.3s;
}

.sidebar-link:hover {
  background-color: #e9f5ff;
  color: #007bff;
}

.sidebar-link.active {
  background-color: #007bff;
  color: white;
  box-shadow: 0 4px 6px rgba(0,123,255,0.2);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #e0e6ed;
    flex-direction: row;
    justify-content: space-around;
    padding: 1rem 0;
  }

  .sidebar-nav {
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    padding: 0;
  }

  .sidebar-link {
    font-size: 3vw;
    margin-bottom: 0;
  }
}


        .sidebar-link.active {
          background-color: #007bff;
          color: white;
          box-shadow: 0 4px 6px rgba(0, 123, 255, 0.2);
        }

        /* Main Content Area */
        

        .main-title {
          color: #0056b3;
          margin-bottom: 1.5rem;
          font-size: 2.2vw;
          font-weight: 600;
          min-height: 25px;
        }

        /* Table Styles */
        .schedule-table-container {
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          overflow: hidden; /* Ensures rounded corners are applied to table */
          width: 100%;
          max-width: 900px;
          margin: auto;
        }
        
        .schedule-table {
          width: 100%;
          border-collapse: collapse;
        }

        .schedule-table th, .schedule-table td {
          padding: 1.25rem 1.5rem;
          text-align: left;
          border-bottom: 1px solid #e0e6ed;
        }

        .schedule-table th {
          background-color: #007bff;
          color: white;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .schedule-table tbody tr:hover {
          background-color: #f3f8ff;
          cursor: pointer;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .header {
            flex-direction: column;
            padding: 1rem;
          }

          .logo {
            font-size: 5vw;
          }

          .nav-link {
            font-size: 3vw;
            margin-top: 10px;
          }

          .main-layout {
            flex-direction: column;
          }

          .sidebar {
            width: 100%;
            border-right: none;
            border-bottom: 1px solid #e0e6ed;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
          }

          .sidebar-nav {
            flex-direction: row;
            justify-content: space-around;
            padding: 1rem 0;
          }

          .sidebar-link {
            font-size: 3vw;
            min-height: auto;
          }

          .main-content {
            padding: 1rem;
          }

          .main-title {
            font-size: 6vw;
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



