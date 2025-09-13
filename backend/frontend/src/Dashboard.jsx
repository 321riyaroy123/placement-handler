import React from "react";
import { Link } from "react-router-dom";

const handleSubmit = async (e) => {
  e.preventDefault();

  const studentData = {
    studentName: e.target.studentName.value,
    registerNumber: e.target.registerNumber.value,
    tenthMarks: e.target.tenthMarks.value,
    twelfthMarks: e.target.twelfthMarks.value,
    semesterResults: e.target.semesterResults.value,
    aggregate: e.target.aggregate.value,
  };

  try {
    const res = await fetch('https://placement-handler.onrender.com/api/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(studentData),
    });

    const data = await res.json();

    if (res.ok) alert("Student saved successfully!");
    else alert(data.error || "Failed to save student");
  } catch (err) {
    console.error(err);
    alert("Server error");
  }
};


const Dashboard = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <>
      {/* Sidebar */}
<aside className="sidebar">
  <nav className="sidebar-nav">
    <Link to="/dashboard" className="sidebar-link">Dashboard</Link>
    <Link to="/student-details" className="sidebar-link active">Student Details</Link>
    <Link to="/schedule" className="sidebar-link">Schedule</Link>
    <Link to="/analytics" className="sidebar-link">Analytics</Link>
    <Link to="/landing" className="sidebar-link">Landing Page</Link>
  </nav>
</aside>

<style>{`
  /* Sidebar Styles */
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

  @media (max-width: 768px) {
    .sidebar {
      width: 100%;
      border-right: none;
      border-bottom: 1px solid #e0e6ed;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
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
      min-height: auto;
      margin-bottom: 0;
    }
  }
`}</style>


      <div className="dashboard-container">
        {/* Header */}
        <header className="header">
          <div className="logo">PLACEMENT CELL</div>
          <nav className="nav">
            <Link to="/overview" className="nav-link">
              Overview
            </Link>
          </nav>
        </header>

        <div className="main-layout">
          {/* Sidebar */}
          <div className="sidebar">
  <a href="/dashboard">Student Details</a>
  <a href="/schedule">Schedule</a>
  <a href="/analytics">Analytics</a>
  <a href="/offer-upload">Offer Letters</a> {/* new link */}
  <a href="/landing">Landing Page</a>
</div>


          {/* Main Content */}
          <main className="main-content">
            <h1 className="main-title">Student Details</h1>
            <div className="form-card">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="studentName">Student Name</label>
                  <input type="text" id="studentName" name="studentName" placeholder="Enter student's name" />
                </div>
                <div className="form-group">
                  <label htmlFor="registerNumber">Register Number</label>
                  <input type="text" id="registerNumber" name="registerNumber" placeholder="Enter register number" />
                </div>
                <div className="form-group">
                  <label htmlFor="tenthMarks">10th Marks (%)</label>
                  <input type="text" id="tenthMarks" name="tenthMarks" placeholder="e.g., 95.5" />
                </div>
                <div className="form-group">
                  <label htmlFor="twelfthMarks">12th Marks (%)</label>
                  <input type="text" id="twelfthMarks" name="twelfthMarks" placeholder="e.g., 92.0" />
                </div>
                <div className="form-group">
                  <label htmlFor="semesterResults">Semester Results (CGPA)</label>
                  <input type="text" id="semesterResults" name="semesterResults" placeholder="e.g., 8.5" />
                </div>
                <div className="form-group">
                  <label htmlFor="aggregate">Consolidated Aggregate (%)</label>
                  <input type="text" id="aggregate" name="aggregate" placeholder="e.g., 88.7" />
                </div>
                <button type="submit" className="submit-button">Submit</button>
              </form>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};


export default Dashboard;



