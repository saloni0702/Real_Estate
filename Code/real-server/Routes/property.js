const express = require("express");
const router = express.Router();
const UserModel = require("../Models/userSchema")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const ProModel = require("../Models/propertySchema")
dotenv.config();
const secretKey = process.env.secretKey;

router.get("/",async (req,res)=>
{
	try{
	const mail = jwt.verify(req.headers.authorization,secretKey);
	UserModel.find({mail:mail}).then((userData)=>{
	if(userData.length)
	{
		ProModel.find({mail:mail}).then((data)=>{
			res.send(data);
		})
	}	
	else
	{
		res.json("Unauthorized User");
	}
})
}catch(err){
	res.json(err);
}
})

module.exports = router;