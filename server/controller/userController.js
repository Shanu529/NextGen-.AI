import userModel from '../models/userModels.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import razorpay from 'razorpay'
import transactionModel from '../models/transactionMdel.js'
import dotenv from "dotenv";


dotenv.config();

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

        console.log("User saved in DB:");

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
        res.json({ success: true, token, user: { name: user.name } })

    } catch (error) {

        console.log("something wrong resister 1", error.message)
        res.json({ success: false, message: "An error occurred. Please try again later. 10" })
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
            return res.json.status(404).json({ success: false, message: "user does not exist" }) //  FIXED

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
        res.json({ success: false, message: "An error occurred. Please try again later.22  " })

    }

}

const userCredits = async (req, res) => {
    // const { userId } = req.body;
    const userId = req.userId;
    try {
        const user = await userModel.findById(userId)
        res.json({
            success: true, credits: user.creditBalance,
            user: { name: user.name }
        })
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })

    }

}


const razorpayInstance = new razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY__KEY_SECRET,
});



const PaymentRazorpay = async (req, res) => {
    try {
        const { userId, planId } = req.body
        const userData = await userModel.findById(userId);

        if (!userId || !planId) {
            return res.json({ success: false, message: "you don't have user ID" })
        }
        let creditS, plan, amount, date
        switch (planId) {
            case "basic": plan = "basic"; creditS = 100; amount = 10; break;
            case "advance": plan = "advance"; creditS= 500; amount = 50; break;
            case "business": plan = "business"; creditS = 500; amount = 250; break; default: return res.json({ success: false, message:"plan nit found"})
        }

        date = Date.now()
        const transactiondata = {
            userId, plan, amount, creditS,  date  //credits
        }

        const newTransaction = await transactionModel.create(transactiondata)

        const options = {
            amount: amount * 100,
            currency: process.env.CURRENCY,
            recepit: newTransaction._id,

        }

        await razorpayInstance.orders.create(options,(error, order)=>{
            if(error){
                console.log(error);
                return res.json({success:false, message:error})
            }
            res.json({success:true, order})
        })
        // const razorpayTranactionData = await (option, (error, order) => {
        //     if (error) {
        //         console.log(error)
        //         return res.josn({ success: false, message: error.message, message: "something wrong" })
        //     }
        //     return res.json({ success: true, order, message: "success" });
        // })
    } catch (error) {
        return res.json({ success: false, message: error.message })

    }
}

export { userRegister, userLogin, userCredits, PaymentRazorpay  } //PaymentRazorpay