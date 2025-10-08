
import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
    console.log("hlo");

    const { token } = req.headers;
    console.log("Token before request:", token);

    if (!token) {
        return res.json({ success: false, message: "not authorized try again later 33" })
    }

    try {

        const tokenDecoder = jwt.verify(token, process.env.JWT_SECRET)
        console.log("Decoded token:", tokenDecoder);

        if (tokenDecoder.id) {
            // req.body.userId = req.headers.Id
            // req.body.userId = tokenDecoder.id;
            req.userId = tokenDecoder.id;
            return next();

        }

        else {
            return res.json({ success: false, message: "not authorized try again later 11" })
            console.log("cant run")
            console.log(token, process.env.JWT_SECRET)
        }

        return next()

    } catch (error) {
        console.log(error.message)
        return res.json({ success: false, message: "not authorized try again later 22" })
        console.log("something wrong in auth middleware", error.message)

    }


}

export default userAuth;