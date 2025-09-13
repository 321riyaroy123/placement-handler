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

  const handleChange = (e) => {
    if (e.target.name === "offerLetter") {
      setFormData({ ...formData, offerLetter: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));

    try {
      const res = await fetch("/api/offers", {
        method: "POST",
        body: data
      });

      const result = await res.json();
      if (res.ok) alert("Offer uploaded successfully!");
      else alert("Error: " + result.error);
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f4f7f9;
          color: #333;
          width:100vw;
        }
        .dashboard-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          width:100vw;
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
        .logo { font-size: 1.8vw; font-weight: 600; letter-spacing: 1px; }
        .nav-link { color: white; text-decoration: none; font-size: 1vw; font-weight: 500; padding: 0.5rem 1rem; border-radius: 5px; transition: background-color 0.3s, color 0.3s; }
        .nav-link:hover { background-color: rgba(255, 255, 255, 0.2); }
        .main-layout { display: flex; flex: 1; }
        .sidebar {
          width: 20vw; min-width: 200px; background-color: #fff; padding: 2rem 0; border-right: 1px solid #e0e6ed;
          box-shadow: 2px 0 5px rgba(0,0,0,0.05); display: flex; flex-direction: column;
        }
        .sidebar a {
          display: block; padding: 0.75rem 1rem; margin-bottom: 0.5rem; text-decoration: none;
          color: #555; font-size: 1.1vw; font-weight: 500; border-radius: 8px; transition: background-color 0.3s, color 0.3s;
        }
        .sidebar a:hover { background-color: #e9f5ff; color: #007bff; }
        .main-content { flex: 1; padding: 2rem; overflow-y: auto; }
        .main-title { color: #0056b3; margin-bottom: 1.5rem; font-size: 2.2vw; font-weight: 600; min-height: 25px; }
        .form-card { background-color: #fff; padding: 2rem; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
        .form-group { margin-bottom: 1.5rem; }
        label { display: block; margin-bottom: 0.5rem; font-weight: 600; color: #444; }
        input[type="text"], input[type="date"], input[type="file"] {
          width: 100%; padding: 0.75rem; border: 1px solid #ccc; border-radius: 6px;
          font-size: 1rem; transition: border-color 0.3s, box-shadow 0.3s;
        }
        input:focus { outline: none; border-color: #007bff; box-shadow: 0 0 0 3px rgba(0,123,255,0.25); }
        .submit-button {
          background-color: #007bff; color: white; border: none; padding: 0.75rem 1.5rem;
          border-radius: 6px; cursor: pointer; font-size: 1rem; font-weight: 600; transition: background-color 0.3s, transform 0.2s;
        }
        .submit-button:hover { background-color: #0056b3; transform: translateY(-2px); }
      `}</style>

      <div className="dashboard-container">
        <header className="header">
          <div className="logo">PLACEMENT CELL</div>
          <nav className="nav">
            <Link to="/overview" className="nav-link">Overview</Link>
          </nav>
        </header>

        <div className="main-layout">
          {/* Sidebar */}
          <div className="sidebar">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/schedule">Schedule</Link>
            <Link to="/analytics">Analytics</Link>
            <Link to="/offer-upload">Offer Letters</Link>
            <Link to="/landing">Landing Page</Link>
          </div>

          {/* Main Content */}
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
              </form>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default OfferUpload;
