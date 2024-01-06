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

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(cors());
app.use('/api/users', userRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/authors', authorsRoutes);
app.use('/api/languages', languagesRoutes);
app.use('/api/publishers', publisherRoutes);
app.use('/api/categories', categoryRoutes);

if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, '/frontend/dist')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
