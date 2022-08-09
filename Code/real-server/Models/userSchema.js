const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    mail:{
        type:String,
        required:true
    }
    ,
    password:{
        type:String,
        required:true,
        minlength:6
    }
    
    
})
const UserModel = mongoose.model("user",UserSchema);
module.exports = UserModel;