import express from "express";
import db from "../db.mjs";
import {body, validationResult} from "express-validator";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


const router = express.Router();
const JWT_SECRET_KEY = "Legend";
//Create a user using: POST "/api/auth/". Doesn't require Auth
router.post("/createuser",[body('username', "Enter a Valid Username").isLength({min: 3}),
body('email', "Enter a valid email").isEmail(), body("password", "Enter valid Password").isLength({min: 5})] , async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    
    const {username , password , email} = req.body;
    let user = {username , secPass , email};
    try {
        db.collection("Users").insertOne(user);
        let data = {user: {id: user.id}};
        const jwtToken = await jwt.sign(data, JWT_SECRET_KEY);
        console.log(jwtToken);
        res.json(jwtToken);
    } catch (error) {res.status(401).send("Please enter unique email id");
console.log(error);
    }
  });

export default router;