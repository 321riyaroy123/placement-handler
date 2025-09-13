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

// Middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// -------------------------
// Serve React frontend
// -------------------------
const frontendPath = path.join(__dirname, "../frontend/dist");
app.use(express.static(frontendPath));

// API routes
app.use("/auth", authRouter);
app.use("/api/offers", offerRouter);
app.use("/api/students", studentRouter);

// -------------------------
// SPA fallback
// -------------------------
// Any non-API request should return React’s index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`✅ Server running at http://localhost:${PORT}`)
);

export default app;
