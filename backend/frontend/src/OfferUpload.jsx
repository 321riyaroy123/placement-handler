import React, { useState } from "react";
import { Link } from "react-router-dom";

const OfferLetters = () => {
  const [offer, setOffer] = useState({
    studentName: "",
    company: "",
    role: "",
    file: null
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setOffer({ ...offer, file: files[0] });
    } else {
      setOffer({ ...offer, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const formData = new FormData();
    formData.append("studentName", offer.studentName);
    formData.append("company", offer.company);
    formData.append("role", offer.role);
    formData.append("file", offer.file);

    try {
      const response = await fetch("http://localhost:3000/offerletters", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Offer letter uploaded successfully!");
        setOffer({ studentName: "", company: "", role: "", file: null });
      } else {
        setMessage(data.msg || "Failed to upload offer letter.");
      }
    } catch (err) {
      console.error(err);
      setMessage("An error occurred while uploading offer letter.");
    }
  };

  return (
    <div className="offer-page">
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

/* Left Sidebar */
.sidebar {
  width: 20vw; /* or min-width: 200px */
  background-color: #fff;
  padding: 2rem 0;
  border-right: 1px solid #e0e6ed;
  box-shadow: 2px 0 5px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
}

/* Main content takes remaining space */
.main-content {
  flex: 1; /* <- This ensures it fills all available space */
  padding: 2rem;
  overflow-y: auto;
}

/* Remove any extra sidebar or padding on the right */

      

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

        /* Main Content */
        
        .main-title {
          font-size: 2.2vw;
          font-weight: 600;
          color: #0056b3;
          margin-bottom: 1.5rem;
        }

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
            <Link to="/dashboard" className="sidebar-link">Dashboard</Link>
            <Link to="/student-details" className="sidebar-link">Student Details</Link>
            <Link to="/offerletters" className="sidebar-link active">Offer Letters</Link>
            <Link to="/schedule" className="sidebar-link">Schedule</Link>
            <Link to="/analytics" className="sidebar-link">Analytics</Link>
            <Link to="/landing" className="sidebar-link">Landing Page</Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <h2 className="main-title">Upload Offer Letter</h2>
          <div className="form-card">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="form-group">
                <label>Student Name</label>
                <input
                  type="text"
                  name="studentName"
                  value={offer.studentName}
                  onChange={handleChange}
                  placeholder="Enter student name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Company</label>
                <input
                  type="text"
                  name="company"
                  value={offer.company}
                  onChange={handleChange}
                  placeholder="Enter company name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Role</label>
                <input
                  type="text"
                  name="role"
                  value={offer.role}
                  onChange={handleChange}
                  placeholder="Enter role"
                  required
                />
              </div>

              <div className="form-group">
                <label>Upload File</label>
                <input
                  type="file"
                  name="file"
                  onChange={handleChange}
                  accept=".pdf,.doc,.docx"
                  required
                />
              </div>

              <button type="submit" className="submit-button">Upload Offer Letter</button>
              {message && <p className="message">{message}</p>}
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default OfferLetters;
