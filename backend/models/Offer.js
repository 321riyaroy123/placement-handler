import mongoose from "mongoose";

const OfferSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  registerNumber: { type: String, required: true },
  companyName: { type: String, required: true },
  offerDate: { type: Date, required: true },
  offerLetter: { type: String, required: true } // store filename or URL
}, { timestamps: true });

export default mongoose.model("Offer", OfferSchema);
