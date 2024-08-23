import connectDB from '../../middleware/mongoose';
import User from '../../models/user'
import jsonwebtoken from "jsonwebtoken";
var CryptoJS = require("crypto-js");


const handler = async (req, res) => {
    if(req.method == "POST"){
        let token = req.body.token
        let user = jsonwebtoken.verify(token, process.env.JWT_SECRET);
        try{
            user = await User.findOne({email: user.email})
            var bytes  = CryptoJS.AES.decrypt(user.password, process.env.AES_SECRET);
            var password = bytes.toString(CryptoJS.enc.Utf8);
            console.log(password)
            if(password === req.body.oldpassword){

                await User.findOneAndUpdate({email: user.email}, {password: CryptoJS.AES.encrypt(req.body.newpassword, process.env.AES_SECRET).toString()})
                res.status(200).json({ success: true });
            }else{
                res.status(200).json({ success: false, message: "Old Password Doesn't Match" });
            }
        }catch{
            res.status(400).json({succes: false});
        }
        }else{
        res.status(400).json({ error: "error"});
    }
}

export default connectDB(handler)