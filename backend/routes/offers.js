import express from "express";
import multer from "multer";
import Offer from "../models/Offer.js";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, "../uploads")),
  filename: (req, file, cb) => cb(null, Date.now() + "_" + file.originalname)
});
const upload = multer({ storage });

router.post("/", upload.single("offerLetter"), async (req, res) => {
  try {
    const { studentName, registerNumber, companyName, offerDate } = req.body;
    const offerLetter = req.file.filename;

    const offer = new Offer({ studentName, registerNumber, companyName, offerDate, offerLetter });
    await offer.save();

    res.status(201).json({ message: "Offer uploaded successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
