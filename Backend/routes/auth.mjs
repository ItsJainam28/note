import express from "express";
import db from "../db.mjs";
import {body, validationResult} from "express-validator";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import fetchuser from "../middleware/fetchuser.mjs";
import { ObjectId } from "mongodb";


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

//Authenticate a user using: POST "/api/auth/login". No login required
router.post('/login', [body('email', "Enter a valid email").isEmail(), body("password", "Enter valid Password").exists()], async(req, res) => { 

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {email, password} = req.body;
    try{
        let user = await db.collection("Users").findOne({email});
        if(!user){
            return res.status(400).json({error: "Please try to login with correct credentials"});

        }

        const passwordCompare = await bcrypt.compare(password, user.secPass);
        console.log(user.password);
        if(!passwordCompare){
            return res.status(400).json({error: "Please try to login with correct credentials"});
        }

        const data = {
            user: {
                id: user.id
            }
        }

        const jwtToken = jwt.sign(data, JWT_SECRET_KEY);
        res.json({jwtToken});


    }
    catch(error){
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});

//Get loggedin user details using: POST "/api/auth/getuser". Login required
router.post('/getuser', fetchuser, async(req, res) => { 
    try{
        let userId =  req.user.id;
        const user = await db.collection("Users").findOne({userId});
        let newId = new ObjectId(user.id).toString();
        let newUser = {
            username: user.username,
            email: user.email,
            Userid: newId
        }
        res.send(newUser);
    }
    catch(error){
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});
export default router;