
import express from 'express';
import cors from 'cors';
import axios from 'axios';
import connectDB from './config/mongodb.js'
import dotenv from "dotenv";
import userRouter from './Router/userRouter.js';
dotenv.config();
import imageRouter from './Router/imageRouter.js';


const app = express();
dotenv.config();


const PORT = process.env.PORT || 4005

app.use(express.json());
app.use(cors());

connectDB()

app.use((req, res, next) => {
  console.log("----- REQUEST HEADERS -----");
  console.log(req.headers);

  console.log("----- REQUEST BODY -----");
  console.log(req.body);

  next(); // Continue to next route
});

app.use('/api/user', userRouter);
app.use('/api/image', imageRouter);

app.get("/", (req, res) => {
  res.send("working")
  console.log("run")
});


app.listen(PORT, () => {
  console.log(`server running on this port ${PORT}`)

});

