import express from 'express';
import mongoose from 'mongoose';  
import userRouter from './routes/user.router.js';
import authRouter from './routes/auth.router.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
