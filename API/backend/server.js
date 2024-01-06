import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware.js'; 
import userRoutes from './routes/userRoutes.js'
import itemRoutes from './routes/itemRoutes.js'
import authorsRoutes from './routes/authorRoutes.js'
import languagesRoutes from './routes/languageRoutes.js'
import publisherRoutes from './routes/publisherRoutes.js'
import categoryRoutes from './routes/catogoriesRoutes.js'
import cors from 'cors';

const port = process.env.PORT || 5000;
