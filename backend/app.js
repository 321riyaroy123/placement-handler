import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { fileURLToPath } from 'url';
import cors from 'cors';

import authRouter from './auth.js'; // adjust path if needed

// __dirname workaround for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// ✅ Serve static files (CSS, JS, images) from backend root
app.use(express.static(__dirname));

// ✅ Page routes (all your HTML files are in backend/)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

app.get('/schedule', (req, res) => {
  res.sendFile(path.join(__dirname, 'schedule.html'));
});

app.get('/overview', (req, res) => {
  res.sendFile(path.join(__dirname, 'overview.html'));
});

app.get('/analytics', (req, res) => {
  res.sendFile(path.join(__dirname, 'analytics.html'));
});

// ✅ API routes
app.use('/auth', authRouter);

// Catch-all for undefined routes
app.get('*', (req, res) => {
  res.status(404).send('Page not found');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

export default app;
