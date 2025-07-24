import express from 'express'; 
import { Router } from 'express';
import { userRegister, userLogin } from './controller/userController.js';

const userRouter = express.Router()

userRouter.post('/register', userRegister)
userRouter.post('/login', userLogin)

export default userRouter;

//http://localhost:4003/api/user/register
//http://localhost:4003/api/user/login