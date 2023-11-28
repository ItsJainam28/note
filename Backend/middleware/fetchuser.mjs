import jwt from "jsonwebtoken";
const JWT_SECRET_KEY = "Legend";
const fetchuser = (req, res, next) => {
    //Get the user from the jwt token and add id to req object
    const token = req.header("auth-token");
    const decodedToken = jwt.decode(token);
console.log(decodedToken);
    console.log(token);
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" });
    }
    try {
        const data = jwt.verify(token, JWT_SECRET_KEY);
        req.user = data.user;
        console.log(req.user);
        next();
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" });
    }
};

export default fetchuser;