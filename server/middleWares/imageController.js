
import userModel from "../models/userModels";
import formData from 'form-data'
import axios from "axios";
const imagecontroller = async (req, res) => {
    try {
        const { userId, prompt } = req.body;
        const user = userModel.findById(userId);
        if (!user || !prompt) {
            return res.json({ success: false, message: "Invalid user or prompt" });
        }
        if (user.creditBalance == 0 || user.creditBalance < 0) {
            return res.json({ success: false, message: "you don't have balance" })
        }

        const formData = new FormData()
        formData.append("prompt", prompt)
        const { data } = await axios.post("https://clipdrop-api.co/text-to-image/v1", formData, {
            headers: {
                'x-api-key': CLIP_DROP_API,
            },
            responseType: ArrayBuffer
        })

    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: "can't run imageController" })

    }
}