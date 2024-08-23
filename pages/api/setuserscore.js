import UserInfo from "../../models/userInfo";
import connectDB from "../../middleware/mongoose";

const handler = async (req, res) => {
    if(req.method == "POST"){
        const {user, score} = req.body;
        try{
            await UserInfo.findOneAndUpdate({email: user.email}, {score: score});
            res.status(200).json({ success: true });
        }catch{
            res.status(400).json({succes: false});
        }
        }else{
        res.status(400).json({ error: "error"});
    }
}

export default connectDB(handler)