

import express from 'express';
import cors from 'cors';
import axios from 'axios';
import connectDB from './config/mongodb.js'
import dotenv from "dotenv";
import userRouter from './userRouter.js';
dotenv.config();


const app = express();

const Port = process.env.Port || 4004

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

app.get("/", (req, res) => {
    res.send("working")
    console.log("run")
});


app.listen(Port, () => {
    console.log(`server running on this port ${Port}`)

});

