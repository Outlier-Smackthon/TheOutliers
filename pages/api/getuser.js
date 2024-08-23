import connectDB from '../../middleware/mongoose';
import User from '../../models/user'
import jsonwebtoken from "jsonwebtoken";


const handler = async (req, res) => {
    if(req.method == "POST"){
        let token = req.body.token
        let user = jsonwebtoken.verify(token, process.env.JWT_SECRET);
        let dbuser = await User.findOne({email: user.email});
        res.status(200).json({name: dbuser.name, address: dbuser.address, phoneno: dbuser.phoneno, pincode:dbuser.pincode, age: dbuser.age});
    }else{
        res.status(400).json({ error: "error"});
    }
}

export default connectDB(handler)