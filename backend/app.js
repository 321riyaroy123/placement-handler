import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import authRouter from "./routes/auth.js";
import offerRouter from "./routes/offers.js";
import studentRouter from "./routes/students.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// API routes
app.use("/auth", authRouter);
app.use("/api/offers", offerRouter);
app.use("/api/students", studentRouter);

// Serve frontend
const frontendPath = path.join(__dirname, "frontend", "dist");
app.use(express.static(frontendPath));

// SPA fallback
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
