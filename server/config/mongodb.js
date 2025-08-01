import mongoose, { connect } from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', () => {
        console.log("running mongodb")
    })
    await mongoose.connect(`${process.env.MONGODB_URL}/NextGenAI`)
};

export default connectDB;