import React, { useState } from "react";
import { Link } from "react-router-dom";

// Student Details Form Component
const StudentDetailsForm = ({ onSubmit }) => {
  const [student, setStudent] = useState({
    studentName: "",
    registerNumber: "",
    tenthMarks: "",
    twelfthMarks: "",
    semesterResults: "",
    aggregate: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (onSubmit) {
      onSubmit(student);
    }

    try {
      const response = await fetch("http://localhost:3000/studentdetails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Student details submitted successfully!");
        setStudent({
          studentName: "",
          registerNumber: "",
          tenthMarks: "",
          twelfthMarks: "",
          semesterResults: "",
          aggregate: ""
        });
      } else {
        setMessage(data.msg || "Failed to submit student details.");
      }
    } catch (err) {
      console.error(err);
      setMessage("An error occurred while submitting details.");
    }
  };

  return (
    <div className="form-card">
      <form onSubmit={handleSubmit}>
        {["studentName", "registerNumber", "tenthMarks", "twelfthMarks", "semesterResults", "aggregate"].map((field) => (
          <div className="form-group" key={field}>
            <label htmlFor={field}>{field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</label>
            <input
              type="text"
              id={field}
              name={field}
              value={student[field]}
              onChange={handleChange}
              placeholder={`Enter ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
              required={field === "studentName" || field === "registerNumber"}
            />
          </div>
        ))}
        <button type="submit" className="submit-button">Submit</button>
        {message && <p className="success-message">{message}</p>}
      </form>
    </div>
  );
};

// Dashboard Component with Layout
const Dashboard = () => {
  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          overflow-x: hidden;
          background-color: #f4f7f9;
        }

        .dashboard-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        /* Header */
        .header {
          background-color: #007bff;
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
        }
        .logo { font-size: 1.5rem; font-weight: bold; }

        .nav-link {
          color: white;
          text-decoration: none;
          padding: 0.5rem 1rem;
          border-radius: 5px;
        }

        .nav-link:hover { background-color: rgba(255, 255, 255, 0.2); }

        /* Layout */
        .main-layout { display: flex; flex: 1; }

        .sidebar {
          width: 220px;
          min-width: 180px;
          background-color: #fff;
          border-right: 1px solid #e0e6ed;
          display: flex;
          flex-direction: column;
          padding: 1.5rem 1rem;
        }

        .sidebar-link {
          padding: 0.75rem 1rem;
          margin-bottom: 0.5rem;
          text-decoration: none;
          color: #555;
          border-radius: 6px;
        }

        .sidebar-link:hover { background-color: #e9f5ff; color: #007bff; }
        .sidebar-link.active { background-color: #007bff; color: white; }

        .main-content {
          flex: 1;
          padding: 2rem;
          overflow-x: hidden;
        }

        .main-title { font-size: 1.8rem; color: #0056b3; margin-bottom: 1.5rem; }

        /* Form Card */
        .form-card {
          background-color: #fff;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }

        .form-group { margin-bottom: 1.5rem; }
        label { display: block; margin-bottom: 0.5rem; font-weight: 600; color: #444; }
        input[type="text"] {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 1rem;
        }
        input[type="text"]:focus {
          outline: none;
          border-color: #007bff;
          box-shadow: 0 0 0 3px rgba(0,123,255,0.25);
        }

        .submit-button {
          background-color: #28a745;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
        }
        .submit-button:hover { background-color: #218838; }

        .success-message { margin-top: 10px; color: green; font-weight: bold; }

        /* Responsive */
        @media (max-width: 768px) {
          .main-layout { flex-direction: column; }
          .sidebar { width: 100%; border-right: none; border-bottom: 1px solid #e0e6ed; }
        }
      `}</style>

      <div className="dashboard-container">
        <header className="header">
          <div className="logo">PLACEMENT CELL</div>
          <nav>
            <Link to="/overview" className="nav-link">Overview</Link>
          </nav>
        </header>

        <div className="main-layout">
          <aside className="sidebar">
            <Link to="/schedule" className="sidebar-link">Schedule</Link>
            <Link to="/analytics" className="sidebar-link">Analytics</Link>
            <Link to="/landing" className="sidebar-link">Dashboard</Link>
            <Link to="/offer-upload" className="sidebar-link">Offer Letters</Link>

          </aside>

          <main className="main-content">
            <h1 className="main-title">Student Details</h1>
            <StudentDetailsForm />
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
