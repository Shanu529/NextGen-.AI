import express from 'express';
import cors from 'cors';
import connectDB from './config/mongodb.js';
import dotenv from "dotenv";
import userRouter from './Router/userRouter.js';
import imageRouter from './Router/imageRouter.js';

dotenv.config();

const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));


app.use(express.json());


app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    console.error("DB ERROR:", err);
    res.status(500).send("Database connection failed");
  }
});

app.use('/api/user', userRouter);
app.use('/api/image', imageRouter);

app.get("/", (req, res) => {
  res.send("working");
});

export default app;