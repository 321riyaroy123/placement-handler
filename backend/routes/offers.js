import express from 'express';
import multer from 'multer';
import path from 'path';
import Offer from '../models/Offer.js';

const router = express.Router();

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

router.post('/', upload.single('offerLetter'), async (req, res) => {
  try {
    const offer = new Offer({
      ...req.body,
      offerLetterPath: req.file.path
    });
    await offer.save();
    res.status(201).json(offer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
