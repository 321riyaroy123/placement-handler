import express from "express";
import Student from "../models/Student.js";

const router = express.Router();

// @route   POST /api/students
// @desc    Create a new student
// @access  Public
router.post("/", async (req, res) => {
  try {
    const { studentName, registerNumber, tenthMarks, twelfthMarks, semesterResults, aggregate } = req.body;

    if (!studentName || !registerNumber) {
      return res.status(400).json({ msg: "Student name and register number are required." });
    }

    const student = new Student({
      studentName,
      registerNumber,
      tenthMarks: tenthMarks ? Number(tenthMarks) : undefined,
      twelfthMarks: twelfthMarks ? Number(twelfthMarks) : undefined,
      semesterResults,
      aggregate: aggregate ? Number(aggregate) : undefined,
    });

    const savedStudent = await student.save();
    res.status(201).json({ msg: "Student created successfully", student: savedStudent });
  } catch (err) {
    console.error("Error saving student:", err);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});

// @route   GET /api/students
// @desc    Get all students
// @access  Public
router.get("/", async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });
    res.json(students);
  } catch (err) {
    console.error("Error fetching students:", err);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});

export default router;
