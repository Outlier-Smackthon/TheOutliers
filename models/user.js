const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    age: {type: Number, default:''},
    address: {type: String, default:''},
    pincode: {type: String,  default:''},
    phoneno: {type: String,  default:''},
}, {timestamps: true});


export default mongoose.models.User || mongoose.model("User", userSchema);