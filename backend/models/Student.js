import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  registerNumber: { type: String, required: true },
  tenthMarks: { type: Number },
  twelfthMarks: { type: Number },
  semesterResults: { type: String },
  aggregate: { type: Number }
}, { timestamps: true });

export default mongoose.model('Student', studentSchema);
