import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { Link } from "react-router-dom";

const Analytics = () => {
  const studentChartRef = useRef(null);
  const barChartRef = useRef(null);

  useEffect(() => {
    // Student Doughnut Chart
    const ctx1 = studentChartRef.current.getContext("2d");
    const studentChart = new Chart(ctx1, {
      type: "doughnut",
      data: {
        labels: ["Eligible", "Interviewed", "Placed"],
        datasets: [
          {
            data: [40, 40, 20],
            backgroundColor: ["#f9df75", "#89c2ff", "#28a745"],
            borderWidth: 2,
            borderColor: "white",
          },
        ],
      },
      options: {
        cutout: "70%",
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                let label = context.label || "";
                if (label) {
                  label += ": ";
                }
                if (context.parsed !== null) {
                  label += context.parsed + "%";
                }
                return label;
              },
            },
          },
        },
      },
    });

    // Placement Bar Chart
    const ctx2 = barChartRef.current.getContext("2d");
    const barChart = new Chart(ctx2, {
      type: "bar",
      data: {
        labels: ["CSE", "IT", "ECE", "ME"],
        datasets: [
          {
            label: "Placements",
            data: [80, 60, 70, 50],
            backgroundColor: [
              "#f9df75",
              "#28a745",
              "#89c2ff",
              "#ff6384",
            ],
            borderRadius: 6,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                let label = context.dataset.label || "";
                if (label) {
                  label += ": ";
                }
                if (context.parsed.y !== null) {
                  label += context.parsed.y + " Placements";
                }
                return label;
              },
            },
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              font: {
                size: 14,
                weight: "bold",
              },
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              color: "#e0e6ed",
            },
          },
        },
      },
    });

    // Cleanup function to destroy charts when the component unmounts or re-renders
    return () => {
      studentChart.destroy();
      barChart.destroy();
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="analytics-page">
      <style>{`
        /* General Body & Layout Styles */
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f4f7f9;
          color: #333;
          width:100vw;
        }

        .analytics-page {
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
          flex: 1;
        }

        /* Sidebar */
        .sidebar {
          width: 20vw;
          min-width: 200px;
          background-color: #fff;
          padding: 2rem 0;
          border-right: 1px solid #e0e6ed;
          box-shadow: 2px 0 5px rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          padding: 0 1.5rem;
        }

        .sidebar-link {
          display: flex;
          align-items: center;
          padding: 0.75rem 1rem;
          margin-bottom: 0.5rem;
          text-decoration: none;
          color: #555;
          font-size: 1.1vw;
          min-height: 30px;
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
          box-shadow: 0 4px 6px rgba(0, 123, 255, 0.2);
        }

        /* Main Content Area */
        .main-content {
          flex: 1;
          padding: 2rem;
          overflow-y: auto;
        }

        .main-title {
          color: #0056b3;
          margin-bottom: 1.5rem;
          font-size: 2.2vw;
          font-weight: 600;
          min-height: 25px;
        }

        /* Analytics Grid */
        .analytics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        /* Card Styles */
        .card {
          background-color: #fff;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          display: flex;
          flex-direction: column;
        }

        .card h3 {
          color: #007bff;
          margin-top: 0;
          margin-bottom: 1rem;
          font-weight: 600;
          font-size: 1.5rem;
        }

        /* Progress Bar */
        .progress-bar-group {
          margin-bottom: 1.5rem;
        }

        .progress-bar-group p {
          margin: 0 0 0.5rem;
          font-weight: 500;
        }

        .progress-bar {
          background-color: #e9ecef;
          border-radius: 10px;
          overflow: hidden;
          height: 10px;
        }
        
        .progress {
          height: 100%;
          background-color: #007bff;
          transition: width 0.5s ease;
        }

        /* Doughnut Legend */
        .donut-legend {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 1.5rem;
        }

        .donut-legend span {
          display: flex;
          align-items: center;
          margin: 0.5rem 1rem;
          font-weight: 500;
        }

        .donut-legend span i {
          width: 12px;
          height: 12px;
          display: inline-block;
          margin-right: 8px;
          border-radius: 50%;
        }

        /* Updates List */
        .updates-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .updates-list li {
          background-color: #f8f9fa;
          padding: 1rem;
          border-radius: 8px;
          margin-bottom: 0.75rem;
          border-left: 4px solid #007bff;
          font-size: 0.95rem;
        }

        /* Media Queries for responsiveness */
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
      <header className="header">
        <div className="logo">PLACEMENT CELL</div>
        <nav>
          <Link to="/overview" className="nav-link">
            Overview
          </Link>
        </nav>
      </header>

      {/* Page Layout */}
      <div className="main-layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <nav className="sidebar-nav">
            <Link to="/dashboard" className="sidebar-link">Dashboard</Link>
            <Link to="/schedule" className="sidebar-link">Schedule</Link>
            <Link to="/analytics" className="sidebar-link active">Analytics</Link>
            <Link to="/landing" className="sidebar-link">Landing Page</Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <h2 className="main-title">Student Placement Analytics 📊</h2>

          <div className="analytics-grid">
            {/* Student Analytics */}
            <div className="card">
              <h3>Student Analytics</h3>
              <canvas ref={studentChartRef}></canvas>
              <div className="donut-legend">
                <span>
                  <i style={{ backgroundColor: "#f9df75" }}></i>Eligible
                </span>
                <span>
                  <i style={{ backgroundColor: "#89c2ff" }}></i>Interviewed
                </span>
                <span>
                  <i style={{ backgroundColor: "#28a745" }}></i>Placed
                </span>
              </div>
            </div>

            {/* Staff Analytics */}
            <div className="card">
              <h3>Staff Analytics</h3>
              <div className="progress-bar-group">
                <p>Registrations</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "80%", backgroundColor: "#007bff" }}></div>
                </div>
              </div>
              <div className="progress-bar-group">
                <p>Eligible Matches</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "70%", backgroundColor: "#28a745" }}></div>
                </div>
              </div>
              <div className="progress-bar-group">
                <p>Scheduled Interviews</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "50%", backgroundColor: "#ffc107" }}></div>
                </div>
              </div>
              <div className="progress-bar-group">
                <p>Placements</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "40%", backgroundColor: "#dc3545" }}></div>
                </div>
              </div>
            </div>

            {/* Placement Analytics */}
            <div className="card">
              <h3>Placement Analytics by Department</h3>
              <canvas ref={barChartRef}></canvas>
            </div>

            {/* Updates */}
            <div className="card">
              <h3>Updates</h3>
              <ul className="updates-list">
                <li>25 students placed at Infosys</li>
                <li>TCS drive on July 3rd</li>
                <li>Resume workshop scheduled next week</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Analytics;