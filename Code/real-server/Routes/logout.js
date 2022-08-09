const express = require("express");
const router = express.Router();
const ProModel = require("../Models/propertySchema")
const UserModel = require("../Models/userSchema")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const secretKey = process.env.secretKey;

router.get("/show",(req,res)=>{
	const mail = jwt.verify(req.headers.authorization,secretKey);
	const object = UserModel.find({mail:mail}).then((userData)=>{
		res.send(userData);
	})
})

module.exports = router; 