import User from "../../models/user";
import UserInfo from "../../models/userInfo";
import connectDB from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

const handler = async (req, res) => {
    if(req.method == "POST"){
        const {name, email} = req.body;
        let u = new User({name, email, password: CryptoJS.AES.encrypt(req.body.password, process.env.AES_SECRET).toString()});
        let uinfo = new UserInfo({email: email})
        var usertoken = jwt.sign({email: email, name: name}, process.env.JWT_SECRET, {expiresIn: '2d'});
        await u.save();
        await uinfo.save();
        res.status(200).json({success: "success", token: usertoken, email: req.body.email})
    }else{
        res.status(400).json({error: "This method is not allowed"})
    }
} 

export default connectDB(handler)
