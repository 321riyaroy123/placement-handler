import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const StudentDetails = () => {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    rollNumber: "",
    department: "",
    phone: ""
  });
  const [message, setMessage] = useState("");

  // Fetch existing student details on mount
  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await fetch("http://localhost:3000/studentdetails"); // adjust your endpoint
        const data = await response.json();
        if (response.ok) setStudent(data);
      } catch (err) {
        console.error("Failed to fetch student details:", err);
      }
    };
    fetchStudent();
  }, []);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("http://localhost:3000/studentdetails", {
        method: "POST", // or PUT if updating
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Student details updated successfully!");
      } else {
        setMessage(data.msg || "Failed to update student details.");
      }
    } catch (err) {
      setMessage("An error occurred while updating details.");
    }
  };

  return (
    <div className="student-page">
      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f4f7f9;
        }

        /* Header */
        .header {
          background-color: #007bff;
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 3vw;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .logo {
          font-size: 1.8vw;
          font-weight: 600;
        }

        .nav-link {
          color: white;
          text-decoration: none;
          font-size: 1vw;
          font-weight: 500;
        }

        .nav-link:hover {
          text-decoration: underline;
        }

        /* Layout */
        .main-layout {
          display: flex;
          min-height: 100vh;
        }

        /* Sidebar */
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

        /* Main content */
        .main-content {
          flex: 1;
          padding: 2rem;
          overflow-y: auto;
        }

        .main-title {
          font-size: 2.2vw;
          font-weight: 600;
          color: #0056b3;
          margin-bottom: 1.5rem;
        }

        /* Form card */
        .form-card {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          max-width: 600px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
          margin: auto;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .form-group input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 1rem;
          box-sizing: border-box;
        }

        .submit-button {
          width: 100%;
          padding: 0.75rem;
          background-color: #28a745;
          color: white;
          border: none;
          font-weight: 600;
          font-size: 1.1rem;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s, transform 0.2s;
        }

        .submit-button:hover {
          background-color: #218838;
          transform: translateY(-2px);
        }

        .message {
          margin-top: 1rem;
          color: red;
          font-weight: 500;
        }

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

          .main-title {
            font-size: 6vw;
          }
        }
      `}</style>

      {/* Header */}
      <div className="header">
        <div className="logo">PLACEMENT CELL</div>
        <div>
          <Link to="/overview" className="nav-link">Overview</Link>
        </div>
      </div>

      <div className="main-layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <nav className="sidebar-nav">
            <Link to="/offer-upload" className="sidebar-link">Offer Letters</Link>
            <Link to="/schedule" className="sidebar-link">Schedule</Link>
            <Link to="/analytics" className="sidebar-link">Analytics</Link>
            <Link to="/landing" className="sidebar-link">Landing Page</Link>
          </nav>
        </aside>

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
  );
};

export default StudentDetails;


