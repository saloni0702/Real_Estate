const express = require("express");
const router = express.Router();
const UserModel = require("../Models/userSchema")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const secretKey = process.env.secretKey;

router.post("/put",(req,res)=>
{
	console.log(req.body)
    UserModel.find({mail: req.body.mail}).then((userData)=>{
		if(userData.length){
			bcrypt.compare(req.body.password, userData[0].password).then((val)=>{
				if(val){
					const authToken = jwt.sign(userData[0].mail, secretKey);
					// res.status(200).send({"status":"Success","token":authToken});
					console.log(authToken);
					res.status(200).send({authToken});
					
				}
				else{
					res.status(400).json("Invalid Password");
				}
			})
		}
		else{
			res.status(400).json("Unauthorized user");
		}
	})
})


module.exports = router;