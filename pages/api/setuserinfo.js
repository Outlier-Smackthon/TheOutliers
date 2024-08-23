import UserInfo from "../../models/userInfo";
import connectDB from "../../middleware/mongoose";

const handler = async (req, res) => {
    if(req.method == "POST"){
        const user = req.body.user;
        const { subject, currentLevel, goal, days, strengths, weaknesses} = req.body;
        try{
            await UserInfo.findOneAndUpdate({email: user.email}, {subject: subject, currentLevel: currentLevel, goal: goal, days:days, strengths:strengths, weaknesses: weaknesses});
            res.status(200).json({ success: true });
        }catch{
            res.status(400).json({succes: false});
        }
        }else{
        res.status(400).json({ error: "error"});
    }
}

export default connectDB(handler)