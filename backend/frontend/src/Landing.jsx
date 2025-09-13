import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing-page">
      <style>{`
        /* General Body & Layout Styles */
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f4f7f9;
          color: #333;
          width:100vw;
        }

        .landing-page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
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

        .nav {
          display: flex;
          gap: 1.5rem;
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

        /* Hero Section */
        .hero {
          text-align: center;
          padding: 8vh 2rem;
          background-color: white;
          border-bottom: 1px solid #e0e6ed;
          position: relative;
        }

        .hero h1 {
          font-size: 3rem;
          font-weight: bold;
          color: #0056b3;
          margin: 0;
          margin-bottom: 0.5rem;
        }

        .hero p {
          font-size: 1.25rem;
          color: #666;
          max-width: 800px;
          margin: 0 auto;
        }

        /* Cards Section */
        .cards-section {
          padding: 4rem 2rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .card {
          background-color: white;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          padding: 2.5rem;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        .card-icon {
          height: 80px;
          width: 80px;
          background-color: #f8f9fa;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 2rem;
          margin: 0 auto 1.5rem;
          box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.05);
        }

        .card h2 {
          font-size: 1.5rem;
          color: #007bff;
          margin-bottom: 0.5rem;
        }

        .card p {
          font-size: 1rem;
          color: #555;
          line-height: 1.6;
        }

        /* Team Section */
        .team-section {
          background-color: #f7f7f7;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          padding: 2rem;
          margin: 4rem 2rem;
          box-shadow: inset 0 1px 3px rgba(0,0,0,0.05);
          text-align: center;
        }

        .team-section h2 {
          font-size: 2rem;
          color: #007bff;
          margin-bottom: 1.5rem;
        }

        .team-list {
          list-style: none;
          padding: 0;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .team-list li {
          font-size: 1.1rem;
          color: #555;
          font-weight: 500;
        }

        /* Footer */
        footer {
          text-align: center;
          padding: 1.5rem;
          background-color: #343a40;
          color: white;
          margin-top: auto;
          box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
        }

        /* Media Queries */
        @media (max-width: 768px) {
          .header {
            flex-direction: column;
            padding: 1rem;
          }

          .logo {
            font-size: 5vw;
          }

          .nav {
            margin-top: 10px;
            gap: 1rem;
          }

          .nav-link {
            font-size: 3.5vw;
          }

          .hero h1 {
            font-size: 8vw;
          }

          .hero p {
            font-size: 4vw;
          }

          .cards-section {
            padding: 2rem 1rem;
          }

          .team-section {
            margin: 2rem 1rem;
          }

          .team-section h2 {
            font-size: 6vw;
          }

          .team-list li {
            font-size: 4vw;
          }
        }
      `}</style>

      {/* Header */}
      <header className="header">
        <div className="logo">Placement Cell</div>
        <nav className="nav">
          <Link to="/dashboard" className="nav-link">Student Details</Link>
          <Link to="/overview" className="nav-link">Overview</Link>
          <Link to="/schedule" className="nav-link">Schedule</Link>
          <Link to="/analytics" className="nav-link">Analytics</Link>
          <Link to="/offer-upload" className="nav-link">Upload Offer</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="hero">
        <h1>Welcome to the Placement Cell</h1>
        <p>
          Connecting students with top companies, empowering careers, and organizing events to build a brighter professional future.
        </p>
      </div>

      {/* Cards Section */}
      <div className="cards-section">
        <div className="card">
          <div className="card-icon" style={{ color: "#28a745" }}>📄</div>
          <h2>Student Profiles</h2>
          <p>
            Explore student profiles, achievements, and portfolios to find the perfect candidates for your company.
          </p>
        </div>
        <div className="card">
          <div className="card-icon" style={{ color: "#dc3545" }}>🏢</div>
          <h2>Company Profiles</h2>
          <p>
            Get to know top recruiting companies and their hiring needs through detailed, visually engaging profiles.
          </p>
        </div>
        <div className="card">
          <div className="card-icon" style={{ color: "#ffc107" }}>📅</div>
          <h2>Events & Workshops</h2>
          <p>
            Stay updated with workshops, placement drives, and training events designed to help students succeed.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <h2>Our Team</h2>
        <ul className="team-list">
          <li>George Michael</li>
          <li>Riya Roy</li>
          <li>Keren John</li>
          <li>Yeshi Tenzin</li>
        </ul><br></br>
        <ul className="team-list">
          <li>2360371</li>
          <li>2360449</li>
          <li>2362341</li>
          <li>23460483</li>
        </ul>
      </div>

      {/* Footer */}
      <footer>© 2025 Placement Cell | All Rights Reserved.</footer>
    </div>
  );
};

export default Landing;

