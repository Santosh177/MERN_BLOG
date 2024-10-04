import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import authRoutes from './routes/auth.route.js';
import userRoutes from './routes/user.route.js';
import postRoutes from './routes/post.route.js';
import commentRoutes from './routes/comment.route.js';
import clc from 'cli-color';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  return res.send({
    status: 200,
    message: "Welcome to your blogging app",
  });
});

app.listen(PORT, () => {
  console.log(clc.blue(`Server is running at`));
  console.log(clc.yellow(`http://localhost:${PORT}`));
});

app.use('/api/auth',authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});