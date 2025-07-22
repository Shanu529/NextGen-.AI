import mongoose, { Types } from "mongoose";


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email:{type:String, required: true, unique:true},
    password:{type:Number, required: true ,  unique:true},
    creditBalance:{ type:Number, default:5}
});



const dbSchemaModel = mongoose.model.userModel ||  mongoose.model("userModel", userSchema)

export default dbSchemaModel;