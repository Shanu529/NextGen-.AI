import userModel from '../models/userModels.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const userRegister = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.json({ success: false, message: "missing data" })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const userData = {
            name,
            email,
            password: hashedPassword
        }
        const newUser = new userModel(userData);
        const user = await newUser.save();

         console.log("User saved to DB:");

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
        res.json({ success: true, token, user: { name: user.name } })

    } catch (error) {

        console.log("something wrong resister 1" , error.message)
        res.json({ success: false, message: "An error occurred. Please try again later." })
    }

}

const userLogin = async (req, res) => {

    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.json.status(400).json({ success: false, message: "Missing email or password" });
        }

        const user = await userModel.findOne({ email }) //change into password to email

        if (!user) {
           return res.json.status(404).json({ success: false, message: "user does not exist" }) // ✅ FIXED

        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
            return res.json({ success: true, token, user: { name: user.name } })
        }
        else {
            res.json.json({ success: false, message: "invalid" })
        }


    }
    catch (error) {

        console.log("something wrong")
        res.json({ success: false, message: "An error occurred. Please try again later. " })

    }

}

export {userRegister, userLogin}