import React, { useState } from "react";

const OfferUpload = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    registerNumber: "",
    companyName: "",
    offerDate: "",
    offerLetter: null
  });
const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append('studentName', studentName);
  formData.append('registerNumber', registerNumber);
  formData.append('companyName', companyName);
  formData.append('offerDate', offerDate);
  formData.append('offerLetter', offerLetterFile);

  try {
    await fetch('/api/offers', {
      method: 'POST',
      body: formData
    });
    alert('Offer uploaded successfully!');
  } catch (err) {
    console.error(err);
    alert('Error uploading offer');
  }
};

  
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
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const res = await fetch("/api/offers", {
        method: "POST",
        body: data
      });

      const result = await res.json();
      if (res.ok) alert("Offer uploaded successfully!");
      else alert("Error: " + result.message);
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto" }}>
      <h2 style={{ color: "#007bff", textAlign: "center" }}>Upload Placement Offer</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label>Student Name</label>
        <input type="text" name="studentName" onChange={handleChange} required />

        <label>Register Number</label>
        <input type="text" name="registerNumber" onChange={handleChange} required />

        <label>Company</label>
        <input type="text" name="companyName" onChange={handleChange} required />

        <label>Offer Date</label>
        <input type="date" name="offerDate" onChange={handleChange} required />

        <label>Offer Letter</label>
        <input type="file" name="offerLetter" onChange={handleChange} required />

        <button type="submit" style={{ backgroundColor: "#007bff", color: "white", padding: "10px 15px", border: "none", borderRadius: "5px", marginTop: "10px" }}>
          Upload
        </button>
      </form>
    </div>
  );
};

export default OfferUpload;
