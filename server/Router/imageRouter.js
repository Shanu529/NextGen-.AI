
import express from 'express'
import imageGenerater from '../controller/imageController.js'
import userAuth from '../middleWares/auth.js'

const imageRouter = express.Router()

imageRouter.post('/generate-image', userAuth, imageGenerater) 

export default imageRouter;