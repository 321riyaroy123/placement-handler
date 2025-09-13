import express from 'express';
import Student from '../models/Student.js';

const router = express.Router();

// Create student
router.post('/', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
