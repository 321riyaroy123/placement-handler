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
    <div className="dashboard-container">
      <header className="header">
        <div className="logo">PLACEMENT CELL</div>
        <nav className="nav">
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
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default OfferUpload;
