import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
    console.log("---- MIDDLEWARE RUN ----");
    console.log("Headers:", req.headers);

    try {
        const authHeader = req.headers.authorization;

        console.log("authHeader:", authHeader);

        if (!authHeader) {
            return res.json({ success: false, message: "No token provided" });
        }

        const token = authHeader.split(" ")[1];

        console.log("token:", token);

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        console.log("decoded:", decoded);

        req.userId = decoded.id;

        next();

    } catch (error) {
        console.log("ERROR:", error.message);
        return res.json({ success: false, message: "Unauthorized" });
    }
};

export default userAuth;