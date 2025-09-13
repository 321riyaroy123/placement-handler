import React, { useState } from "react";
import { Link } from "react-router-dom";

// Offer Letters Form Component
const OfferLettersForm = () => {
  const [offer, setOffer] = useState({
    studentName: "",
    registerNumber: "",
    companyName: "",
    offerDate: "",
    offerLetter: null
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "offerLetter") setOffer({ ...offer, offerLetter: files[0] });
    else setOffer({ ...offer, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const formData = new FormData();
    formData.append("studentName", offer.studentName);
    formData.append("registerNumber", offer.registerNumber);
    formData.append("companyName", offer.companyName);
    formData.append("offerDate", offer.offerDate);
    formData.append("offerLetter", offer.offerLetter);

    try {
      const response = await fetch("http://localhost:3000/offerletters", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (response.ok) {
        setMessage("Offer letter uploaded successfully!");
        setOffer({ studentName:"", registerNumber:"", companyName:"", offerDate:"", offerLetter:null });
      } else {
        setMessage(data.msg || "Upload failed");
      }
    } catch (err) {
      console.error(err);
      setMessage("Error uploading offer letter");
    }
  };

  return (
    <div className="form-card">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {["studentName", "registerNumber", "companyName", "offerDate"].map((field) => (
          <div className="form-group" key={field}>
            <label>{field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</label>
            <input
              type={field === "offerDate" ? "date" : "text"}
              name={field}
              value={offer[field]}
              onChange={handleChange}
              placeholder={`Enter ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
              required
            />
          </div>
        ))}
        <div className="form-group">
          <label>Offer Letter</label>
          <input type="file" name="offerLetter" onChange={handleChange} accept=".pdf,.doc,.docx" required />
        </div>
        <button type="submit" className="submit-button">Upload</button>
        {message && <p className="success-message">{message}</p>}
      </form>
    </div>
  );
};

// Dashboard Layout for Offer Letters Page
const OfferLetters = () => {
  return (
    <>
      <style>{`
        body {
          margin:0; 
          font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
          overflow-x:hidden;
          background-color: #f4f7f9;
        }

        .dashboard-container { display:flex; flex-direction:column; min-height:100vh; }

        .header {
          background-color: #007bff; color:white; display:flex; justify-content:space-between; align-items:center; padding:1rem 2rem;
        }
        .logo { font-size:1.5rem; font-weight:bold; }
        .nav-link { color:white; text-decoration:none; padding:0.5rem 1rem; border-radius:5px; }
        .nav-link:hover { background-color: rgba(255,255,255,0.2); }

        .main-layout { display:flex; flex:1; }
        .sidebar {
          width:220px; min-width:180px; background-color:#fff; border-right:1px solid #e0e6ed; display:flex; flex-direction:column; padding:1.5rem 1rem;
        }
        .sidebar-link { padding:0.75rem 1rem; margin-bottom:0.5rem; text-decoration:none; color:#555; border-radius:6px; }
        .sidebar-link:hover { background-color:#e9f5ff; color:#007bff; }
        .sidebar-link.active { background-color:#007bff; color:white; }

        .main-content { flex:1; padding:2rem; overflow-x:hidden; max-width:700px; margin:auto; }
        .main-title { font-size:1.8rem; color:#0056b3; margin-bottom:1.5rem; }

        .form-card { background:white; border-radius:12px; padding:2rem; box-shadow:0 8px 24px rgba(0,0,0,0.1); }
        .form-group { margin-bottom:1.5rem; }
        .form-group label { display:block; margin-bottom:0.5rem; font-weight:600; color:#444; }
        .form-group input { width:100%; padding:0.75rem; border:1px solid #ccc; border-radius:8px; font-size:1rem; box-sizing:border-box; }
        .form-group input:focus { outline:none; border-color:#007bff; box-shadow:0 0 0 3px rgba(0,123,255,0.25); }

        .submit-button { width:100%; padding:0.75rem; background:#28a745; color:white; border:none; font-weight:600; font-size:1.1rem; border-radius:8px; cursor:pointer; transition:0.2s; }
        .submit-button:hover { background:#218838; transform:translateY(-2px); }
        .success-message { margin-top:1rem; color:green; font-weight:bold; }

        @media(max-width:768px){
          .main-layout { flex-direction:column; }
          .sidebar { width:100%; border-right:none; border-bottom:1px solid #e0e6ed; }
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
            <Link to="/dashboard" className="sidebar-link">Student Details</Link>
            <Link to="/analytics" className="sidebar-link">Analytics</Link>
            <Link to="/landing" className="sidebar-link">Dashboard</Link>
                        <Link to="/schedule" className="sidebar-link">Schedule</Link>

          </aside>

          <main className="main-content">
            <h1 className="main-title">Upload Offer Letter</h1>
            <OfferLettersForm />
          </main>
        </div>
      </div>
    </>
  );
};

export default OfferLetters;
