import express from 'express';
import { Router } from 'express';
import { userRegister, userLogin, userCredits,  PaymentRazorpay } from '../controller/userController.js'; // PaymentRazorpay
import userAuth from '../middleWares/auth.js';

const userRouter = express.Router()

userRouter.post('/register', userRegister)
userRouter.post('/login', userLogin)
userRouter.get('/credits', userAuth, userCredits)
userRouter.post('/pay-razor', userAuth, PaymentRazorpay)

export default userRouter;

//http://localhost:4004/api/user/register
//http://localhost:4004/api/user/login