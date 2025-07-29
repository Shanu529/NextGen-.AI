import express from 'express';
import { Router } from 'express';
import { userRegister, userLogin, userCredits } from './controller/userController.js';
import userAuth from './middleWares/auth.js';

const userRouter = express.Router()

userRouter.post('/register', userRegister)
userRouter.post('/login', userLogin)

userRouter.post('/credits', userAuth, userCredits)

export default userRouter;

//http://localhost:4004/api/user/register
//http://localhost:4004/api/user/login