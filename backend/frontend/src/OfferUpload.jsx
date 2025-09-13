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
      const response = await fetch("/api/offers", {
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
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f4f7f9;
  color: #333;
  width:100vw;
}

/* Dashboard Layout */
.dashboard-container {
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
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

/* Main Layout (Sidebar + Content) */
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
  max-width: 700px;
  margin: auto;
  overflow-y: auto;
}

.main-title {
  color: #0056b3;
  margin-bottom: 1.5rem;
  font-size: 2.2vw;
  font-weight: 600;
  min-height: 25px;
}

/* Form Card */
.form-card {
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #444;
}

input[type="text"],
input[type="date"],
input[type="file"] {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  box-sizing: border-box;
  transition: border-color 0.3s, box-shadow 0.3s;
}

input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
}

/* Submit Button */
.submit-button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.3s, transform 0.2s;
  width: 100%;
}

.submit-button:hover {
  background-color: #218838;
  transform: translateY(-2px);
}

/* Success Message */
.success-message {
  margin-top: 1rem;
  color: green;
  font-weight: bold;
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
