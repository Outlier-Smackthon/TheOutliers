import connectDB from '../../middleware/mongoose';
import User from '../../models/user'


const handler = async (req, res) => {
    if(req.method == "POST"){
        let dbuser = await User.findOne({email: req.body.user.email});
        let userinfo = await userInfo.findOne({email: req.body.user.email})
        res.status(200).json({success: true, name: dbuser.name, subject: userinfo.subject});
    }else{
        res.status(400).json({ error: false});
    }
}

export default connectDB(handler)