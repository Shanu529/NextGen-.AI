
import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
    const { token } = req.headers;
    if (!token) {
        return res.json({ success: false, message: "not authorized try again later 3" })

    }

    try {
        const tokenDecoder = jwt.verify(token, process.env.JWT_SECRET)
        if (tokenDecoder.id) {
            // req.body.userId = req.headers.Id
            // req.body.userId = tokenDecoder.id;
            req.userId = tokenDecoder.id;

        }

        else {
            return res.json({ success: false, message: "not authorized try again later 1" })
            console.log("cant run")
            console.log(token, process.env.JWT_SECRET)
        }

        return next()

    } catch (error) {
        console.log(error.message)
        return res.json({ success: false, message: "not authorized try again later 2" })
        console.log("something wrong in auth middleware", error.message)

    }


}

export default userAuth;