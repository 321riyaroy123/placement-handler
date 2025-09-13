import React, { useState } from "react";
import { Link } from "react-router-dom";

const OfferUpload = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    registerNumber: "",
    companyName: "",
    offerDate: "",
    offerLetter: null
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "offerLetter") {
      setFormData({ ...formData, offerLetter: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    const data = new FormData();
    Object.keys(formData).forEach(key => data.append(key, formData[key]));

    try {
      const res = await fetch("https://placement-handler.onrender.com/api/offers", {
        method: "POST",
        body: data
      });
      const result = await res.json();
      if (res.ok) setMessage(result.message);
      else setError(result.error || "Failed to upload offer");
    } catch (err) {
      console.error(err);
      setError("Server error");
    }
  };

  return (
    <div className="dashboard-container">
      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f4f7f9;
        }

        .dashboard-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .header {
          background-color: #007bff;
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 3vw;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .logo { font-size: 1.8vw; font-weight: 600; }

        .nav-link {
          color: white;
          text-decoration: none;
          font-size: 1vw;
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          transition: background-color 0.3s;
        }

        .nav-link:hover { background-color: rgba(255,255,255,0.2); }

        .main-layout { display: flex; flex: 1; }

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

        .sidebar a {
          padding: 0.75rem 1rem;
          margin-bottom: 0.5rem;
          text-decoration: none;
          color: #555;
          font-size: 1.1vw;
          font-weight: 500;
          border-radius: 8px;
          transition: background-color 0.3s, color 0.3s;
        }

        .sidebar a:hover { background-color: #e9f5ff; color: #007bff; }

        .main-content {
          flex: 1;
          padding: 2rem;
          overflow-y: auto;
        }

        .main-title { color: #0056b3; font-size: 2.2vw; font-weight: 600; margin-bottom: 1rem; }

        .form-card {
          background-color: #fff;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }

        .form-group { margin-bottom: 1.5rem; }

        label { display: block; margin-bottom: 0.5rem; font-weight: 600; color: #444; }

        input[type="text"], input[type="date"], input[type="file"] {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 1rem;
        }

        input[type="text"]:focus, input[type="date"]:focus, input[type="file"]:focus {
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
          font-size: 1rem;
          font-weight: 600;
          transition: background-color 0.3s;
        }

        .submit-button:hover { background-color: #218838; }

        .message { color: green; margin-top: 1rem; font-weight: 600; }
        .error { color: red; margin-top: 1rem; font-weight: 600; }

        @media (max-width: 768px) {
          .header { flex-direction: column; padding: 1rem; }
          .logo { font-size: 5vw; }
          .sidebar { width: 100%; border-right: none; border-bottom: 1px solid #e0e6ed; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
          .sidebar a { font-size: 3vw; }
          .main-layout { flex-direction: column; }
          .main-title { font-size: 6vw; }
        }
      `}</style>

      <header className="header">
        <div className="logo">PLACEMENT CELL</div>
        <nav className="nav">
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
          <Link to="/overview" className="nav-link">Overview</Link>
        </nav>
      </header>

      <div className="main-layout">
        <div className="sidebar">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/schedule">Schedule</Link>
          <Link to="/analytics">Analytics</Link>
          <Link to="/offer-upload">Offer Letters</Link>
          <Link to="/landing">Landing Page</Link>
        </div>

        <main className="main-content">
          <h1 className="main-title">Upload Placement Offer</h1>
          <div className="form-card">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="form-group">
                <label>Student Name</label>
                <input type="text" name="studentName" onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Register Number</label>
                <input type="text" name="registerNumber" onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Company</label>
                <input type="text" name="companyName" onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Offer Date</label>
                <input type="date" name="offerDate" onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Offer Letter</label>
                <input type="file" name="offerLetter" onChange={handleChange} required />
              </div>
              <button type="submit" className="submit-button">Upload</button>
              {message && <div className="message">{message}</div>}
              {error && <div className="error">{error}</div>}
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default OfferUpload;
