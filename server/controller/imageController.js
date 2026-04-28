
import userModel from "../models/userModels.js";
import FormData from 'form-data'
import axios from "axios";
import mongoose from 'mongoose';

const imagecontroller = async (req, res) => {
    console.log("api ClipDrop hit");
    
    try {
        console.log("request from frontend", req.body);
        
        const { prompt } = req.body;
        const userId = req.userId
        const user = await userModel.findById(userId);
        if (!user || !prompt) {
            return res.json({ success: false, message: "Invalid user or prompt", });
            console.log(error.message);
        }
        if (user.creditBalance == 0 || user.creditBalance < 0) {
            return res.json({ success: false, message: "you don't have balance" })
        }

        const form = new FormData()
        form.append("prompt", prompt)
        console.log("api hitting points...");
        
        const { data } = await axios.post("https://clipdrop-api.co/text-to-image/v1", form, {
            headers: {
                ...form.getHeaders(),
                'x-api-key': process.env.CLIP_DROP_API,
            },
            responseType: "arraybuffer"
        })
        const base64Image = Buffer.from(data, "binary").toString('base64')
        const resultImage = `data:image/png;base64,${base64Image}`
        await userModel.findByIdAndUpdate(user._id, {
            creditBalance: user.creditBalance - 1, resultImage
        })

        res.json({ success: true, message: "image generated", image: resultImage });

    } catch (error) {
        console.log(error.message)
        console.error(" Error in imageController:", error.message); // Full error object
        console.error(" error.message:", error.message);    // Just the message
        res.json({ success: false, message: "can't run imageController", error })

    }
}

export default imagecontroller;