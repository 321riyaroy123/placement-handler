import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { fileURLToPath } from 'url';
import cors from 'cors'; // Import the cors middleware

import authRouter from './routes/auth.js';

// __dirname workaround for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors()); // Use the cors middleware to allow all origins

// Serve static files from frontend build
app.use(express.static(path.join(__dirname, 'client', 'dist')));

// API routes
app.use('/auth', authRouter);

// Catch-all route for SPA (React/Vite/Angular)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

export default app;