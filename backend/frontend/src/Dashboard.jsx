import React, { useState } from "react";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
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
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#FFE2E2", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{
        backgroundColor: "#6a0dad",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 30px",
        fontSize: "18px"
      }}>
        <div>PLACEMENT CELL</div>
        <div>REGISTER COMPANY</div>
      </div>

      {/* Layout */}
      <div style={{ display: "flex" }}>
        {/* Sidebar */}
        <div style={{
          backgroundColor: "#FFE2E2",
          padding: "20px",
          width: "200px",
          borderRight: "2px solid #7d7373",
          minHeight: "calc(100vh - 60px)"
        }}>
          <a href="#" style={{ display: "block", marginBottom: "10px", fontWeight: "bold", color: "#000", textDecoration: "none" }}>Home</a>
          <a href="#" style={{ display: "block", marginBottom: "10px", fontWeight: "bold", color: "#000", textDecoration: "none" }}>Dashboard</a>
          <a href="/offer-upload" style={{ display: "block", marginBottom: "10px", fontWeight: "bold", color: "#000", textDecoration: "none" }}>Upload Offer Letter</a>
        </div>

        {/* Main content */}
        <div style={{ flex: 1, padding: "30px" }}>
          <h1 style={{ color: "#6a0dad" }}>Student Details</h1>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Student Name</label>
              <input
                type="text"
                name="studentName"
                value={student.studentName}
                onChange={handleChange}
                style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                required
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Register Number</label>
              <input
                type="text"
                name="registerNumber"
                value={student.registerNumber}
                onChange={handleChange}
                style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                required
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>10th Marks</label>
              <input
                type="text"
                name="tenthMarks"
                value={student.tenthMarks}
                onChange={handleChange}
                style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>12th Marks</label>
              <input
                type="text"
                name="twelfthMarks"
                value={student.twelfthMarks}
                onChange={handleChange}
                style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Semester Results</label>
              <input
                type="text"
                name="semesterResults"
                value={student.semesterResults}
                onChange={handleChange}
                style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Consolidated Aggregate</label>
              <input
                type="text"
                name="aggregate"
                value={student.aggregate}
                onChange={handleChange}
                style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
              />
            </div>

            <button type="submit" style={{
              backgroundColor: "#6a0dad",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px"
            }}>
              Submit
            </button>

            {message && <p style={{ marginTop: "10px", color: "green", fontWeight: "bold" }}>{message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
