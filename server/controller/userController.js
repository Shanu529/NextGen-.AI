import userModel from '../models/userModels.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const ragister = async(req, res)=>{
    try {

        const {name, email, password} = req.body;

        if(!name || !email || !password){

            return res.send("suc")

        }
        
    } catch (error) {
        
    }

}