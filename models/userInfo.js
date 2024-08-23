const mongoose = require('mongoose');

const userInfoSchema = new mongoose.Schema({
    email: {type: String, required: true, unique:true},
    subject: {type: String, default: ''},
    currentLevel: {type: String, default:''},
    strengths: {type: Array, default:''},
    weaknesses: {type: Array,  default:''},
    goal: {type: String,  default:''},
    days: {type: Number,  default:''},
    score: {type: Number,  default:''}
}, {timestamps: true});


export default mongoose.models.UserInfo || mongoose.model("UserInfo", userInfoSchema);