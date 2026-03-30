import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.MONGODB_URL);
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB Error:", error);
    throw error;
  }
};

export default connectDB;