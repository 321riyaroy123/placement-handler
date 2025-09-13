import express from 'express';
import Student from '../models/Student.js';

const router = express.Router();

// Create student
router.post('/', async (req, res) => {
  try {
    const { studentName, registerNumber, tenthMarks, twelfthMarks, semesterResults, aggregate } = req.body;

    // Convert numeric fields to numbers
    const student = new Student({
      studentName,
      registerNumber,
      tenthMarks: tenthMarks ? Number(tenthMarks) : undefined,
      twelfthMarks: twelfthMarks ? Number(twelfthMarks) : undefined,
      semesterResults,
      aggregate: aggregate ? Number(aggregate) : undefined
    });

    await student.save();
    res.status(201).json(student);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
});

export default router;
