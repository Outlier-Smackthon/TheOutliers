import connectDB from '../../middleware/mongoose';
import User from '../../models/user'
import userInfo from '../../models/userInfo';


const handler = async (req, res) => {
    if(req.method == "POST"){
        let dbuser = await User.findOne({email: req.body.user.email});
        let userinfo = await userInfo.findOne({email: req.body.user.email})
        res.status(200).json({success: true, name: dbuser.name, subject: userinfo.subject, currentLevel: userinfo.currentLevel,
             strengths: userinfo.strengths, weaknesses: userinfo.weaknesses, goal: userinfo.goal, days: userinfo.days, score: userinfo.score});
    }else{
        res.status(400).json({ error: false});
    }
}

export default connectDB(handler)