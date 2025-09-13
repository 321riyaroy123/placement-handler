import React, { useState } from "react";
import { Link } from "react-router-dom";

const OfferLetters = () => {
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
    <div className="offer-page">
      <style>{`
        body {margin:0; font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif; background:#f4f7f9;}
        .main-layout {display:flex; min-height:100vh;}
        .main-content {flex:1; padding:2rem; max-width:700px; margin:auto;}
        .main-title {font-size:2.2vw; font-weight:600; color:#0056b3; margin-bottom:1.5rem;}
        .form-card {background:white; border-radius:12px; padding:2rem; box-shadow:0 8px 24px rgba(0,0,0,0.1);}
        .form-group {margin-bottom:1.5rem;}
        .form-group label {display:block; margin-bottom:0.5rem; font-weight:600;}
        .form-group input {width:100%; padding:0.75rem; border:1px solid #ddd; border-radius:8px; font-size:1rem; box-sizing:border-box;}
        .submit-button {width:100%; padding:0.75rem; background:#28a745; color:white; border:none; font-weight:600; font-size:1.1rem; border-radius:8px; cursor:pointer; transition:0.2s;}
        .submit-button:hover {background:#218838; transform:translateY(-2px);}
        .message {margin-top:1rem; color:red; font-weight:500;}
      `}</style>

      <main className="main-content">
        <h1 className="main-title">Upload Offer Letter</h1>
        <div className="form-card">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="form-group">
              <label>Student Name</label>
              <input type="text" name="studentName" value={offer.studentName} onChange={handleChange} placeholder="Enter student name" required/>
            </div>
            <div className="form-group">
              <label>Register Number</label>
              <input type="text" name="registerNumber" value={offer.registerNumber} onChange={handleChange} placeholder="Enter register number" required/>
            </div>
            <div className="form-group">
              <label>Company</label>
              <input type="text" name="companyName" value={offer.companyName} onChange={handleChange} placeholder="Enter company name" required/>
            </div>
            <div className="form-group">
              <label>Date of
