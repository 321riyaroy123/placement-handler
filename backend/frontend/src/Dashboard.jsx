import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const StudentDetails = () => {
  const [student, setStudent] = useState({
    studentName: "",
    registerNumber: "",
    tenthMarks: "",
    twelfthMarks: "",
    semesterResults: "",
    aggregate: ""
  });
  const [message, setMessage] = useState("");

  // Fetch existing details
  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await fetch("http://localhost:3000/studentdetails");
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
        method: "POST", // or PUT for update
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      });
      const data = await response.json();
      if (response.ok) setMessage("Student details updated successfully!");
      else setMessage(data.msg || "Failed to update details");
    } catch (err) {
      setMessage("An error occurred while updating details");
      console.error(err);
    }
  };

  return (
    <div className="student-page">
      <style>{`
        body { margin:0; font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif; background:#f4f7f9;}
        .main-layout { display:flex; min-height:100vh; }
        .sidebar { width:20vw; min-width:200px; background:white; padding:2rem 0; border-right:1px solid #e0e6ed; display:flex; flex-direction:column; }
        .sidebar-nav { display:flex; flex-direction:column; padding:0 1.5rem; }
        .sidebar-link { padding:0.75rem 1rem; margin-bottom:0.5rem; text-decoration:none; color:#555; font-weight:500; border-radius:8px; transition:0.3s; }
        .sidebar-link:hover { background:#e9f5ff; color:#007bff; }
        .sidebar-link.active { background:#007bff; color:white; }
        .main-content { flex:1; padding:2rem; overflow-y:auto; }
        .main-title { font-size:2.2vw; font-weight:600; color:#0056b3; margin-bottom:1.5rem; }
        .form-card { background:white; border-radius:12px; padding:2rem; max-width:600px; box-shadow:0 8px 24px rgba(0,0,0,0.1); margin:auto; }
        .form-group { margin-bottom:1.5rem; }
        .form-group label { display:block; margin-bottom:0.5rem; font-weight:600; }
        .form-group input { width:100%; padding:0.75rem; border:1px solid #ddd; border-radius:8px; font-size:1rem; box-sizing:border-box; }
        .submit-button { width:100%; padding:0.75rem; background:#28a745; color:white; border:none; font-weight:600; font-size:1.1rem; border-radius:8px; cursor:pointer; transition:0.2s; }
        .submit-button:hover { background:#218838; transform:translateY(-2px);}
        .message { margin-top:1rem; color:red; font-weight:500; }
      `}</style>

      <div className="main-layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <nav className="sidebar-nav">
            <Link to="/offerletters" className="sidebar-link">Offer Letters</Link>
            <Link to="/schedule" className="sidebar-link">Schedule</Link>
            <Link to="/analytics" className="sidebar-link">Analytics</Link>
            <Link to="/landing" className="sidebar-link">Landing Page</Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <h1 className="main-title">Student Placement Details</h1>
          <div className="form-card">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Student Name</label>
                <input name="studentName" value={student.studentName} onChange={handleChange} placeholder="Enter student name" required/>
              </div>
              <div className="form-group">
                <label>Register Number</label>
                <input name="registerNumber" value={student.registerNumber} onChange={handleChange} placeholder="Enter register number" required/>
              </div>
              <div className="form-group">
                <label>10th Marks (%)</label>
                <input name="tenthMarks" value={student.tenthMarks} onChange={handleChange} placeholder="e.g., 95.5"/>
              </div>
              <div className="form-group">
                <label>12th Marks (%)</label>
                <input name="twelfthMarks" value={student.twelfthMarks} onChange={handleChange} placeholder="e.g., 92.0"/>
              </div>
              <div className="form-group">
                <label>Semester Results (CGPA)</label>
                <input name="semesterResults" value={student.semesterResults} onChange={handleChange} placeholder="e.g., 8.5"/>
              </div>
              <div className="form-group">
                <label>Consolidated Aggregate (%)</label>
                <input name="aggregate" value={student.aggregate} onChange={handleChange} placeholder="e.g., 88.7"/>
              </div>
              <button type="submit" className="submit-button">Submit</button>
              {message && <p className="message">{message}</p>}
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentDetails;
