import express from "express";
import multer from "multer";
import path from "path";
import Offer from "../models/Offer.js";
import fs from "fs";

const router = express.Router();

const uploadDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(process.cwd(), "uploads")),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({ storage });

// @route   POST /api/offers
// @desc    Upload a new offer letter
// @access  Public
router.post("/", upload.single("offerLetter"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ msg: "Offer letter file is required." });
    }

    const offer = new Offer({
      ...req.body,
      offerLetterPath: `/uploads/${req.file.filename}`,
    });

    const savedOffer = await offer.save();
    res.status(201).json({ msg: "Offer uploaded successfully", offer: savedOffer });
  } catch (err) {
    console.error("Error saving offer:", err);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});

// @route   GET /api/offers
// @desc    Get all offers
// @access  Public
router.get("/", async (req, res) => {
  try {
    const offers = await Offer.find().sort({ createdAt: -1 });
    res.json(offers);
  } catch (err) {
    console.error("Error fetching offers:", err);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});

export default router;
