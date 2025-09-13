import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { fileURLToPath } from 'url';
import cors from 'cors';

import authRouter from './routes/auth.js'; // adjust path if needed

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// ✅ Serve static assets
app.use('/frontend/src', express.static(path.join(__dirname, 'frontend', 'src')));

// ✅ Serve HTML pages
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'login.html')));
app.get('/schedule', (req, res) => res.sendFile(path.join(__dirname, 'schedule.html')));
app.get('/overview', (req, res) => res.sendFile(path.join(__dirname, 'overview.html')));
app.get('/analytics', (req, res) => res.sendFile(path.join(__dirname, 'analytics.html')));

// ✅ API routes
app.use('/auth', authRouter);

// Catch-all for undefined routes
app.get('*', (req, res) => res.status(404).send('Page not found'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));

export default app;
