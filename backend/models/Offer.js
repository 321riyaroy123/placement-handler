import mongoose from 'mongoose';

const offerSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  registerNumber: { type: String, required: true },
  companyName: { type: String, required: true },
  offerDate: { type: Date, required: true },
  offerLetterPath: { type: String, required: true } // path to file saved on server
}, { timestamps: true });

export default mongoose.model('Offer', offerSchema);
