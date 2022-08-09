const express = require("express");
const router = express.Router();
const UserModel = require("../Models/userSchema");
const bcrypt = require("bcryptjs")
const crypto = require("crypto");
const salt = 10;

router.post("/add", async (req,res)=>
{

   await UserModel.find({mail:req.body.mail})
   .then((data)=>
   {
    if(!data.length)
    {
        res.status(400).json("User Not Exists")
    }
    else
    {
      
      bcrypt.genSalt(salt).then( (saltHash)=>{
		bcrypt.hash(req.body.password, saltHash).then((passwordHash)=>{
				UserModel.updateOne({mail:req.body.mail},{password:passwordHash}).then((user)=>{
					res.status(200).send({user});
				})
				}).catch((err)=>{
					console.log(err);
			})
			}).catch((err)=>{
				console.log(err);
		})
 }
   })
})



module.exports = router;