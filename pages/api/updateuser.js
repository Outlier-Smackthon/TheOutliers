import connectDB from '../../middleware/mongoose';
import User from '../../models/user'
import jsonwebtoken from "jsonwebtoken";


const handler = async (req, res) => {
    if(req.method == "POST"){
        let token = req.body.token
        let user = jsonwebtoken.verify(token, process.env.JWT_SECRET);
        try{
            await User.findOneAndUpdate({email: user.email}, {name:req.body.name, phoneno:req.body.phoneno, address: req.body.address, pincode: req.body.pincode, age:req.body.age});
            res.status(200).json({ success: true });
        }catch{
            res.status(400).json({succes: false});
        }
        }else{
        res.status(400).json({ error: "error"});
    }
}

export default connectDB(handler)