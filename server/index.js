import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import authRoutes from './routes/auth.route.js';
import clc from 'cli-color';

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


app.use('/api/auth',authRoutes)