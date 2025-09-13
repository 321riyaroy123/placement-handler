import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import { fileURLToPath } from "url";

// Import routes
import authRouter from "./routes/auth.js";
import offerRouter from "./routes/offers.js";
import studentRouter from "./routes/students.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// -------------------------
// Middleware
// -------------------------
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// -------------------------
// API routes (must come before frontend)
// -------------------------
app.use("/auth", authRouter);
app.use("/api/offers", offerRouter);
app.use("/api/students", studentRouter);

// -------------------------
// Serve React frontend
// -------------------------
const frontendPath = path.join(__dirname, "frontend", "dist");
app.use(express.static(frontendPath));

// SPA fallback (for React Router)
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// -------------------------
// Start server
// -------------------------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`✅ Server running at http://localhost:${PORT}`)
);

export default app;
