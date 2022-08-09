const express = require("express");
const router = express.Router();
const ProModel = require("../Models/propertySchema")
const UserModel = require("../Models/userSchema")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const secretKey = process.env.secretKey;



router.post("/",(req,res)=>{
	try{
		const mail = jwt.verify(req.headers.authorization,secretKey);
		UserModel.find({mail:mail}).then((userData)=>{
			if(userData.length){
				 ProModel.create({mail:userData[0].mail,PropertyType:req.body.PropertyType,
				 	Views:Math.floor((Math.random() * 100) + 1),
Negotiable:req.body.Negotiable,
Price:req.body.Price,
Ownership:req.body.Ownership,
PropertyAge:req.body.PropertyAge,
PropertyApproved:req.body.PropertyApproved, 
PropertyDescription:req.body.PropertyDescription, 
BankLoan:req.body.BankLoan,
Length:req.body.Length ,
Breadth:req.body.Breadth ,
TotalArea:req.body.TotalArea,
AreaUnit:req.body.AreaUnit ,
NoOfBHK:req.body.NoOfBHK ,
NoOfFloor:req.body.NoOfFloor, 
Attached :req.body.Attached,
WesternToilet:req.body.WesternToilet,
Furnished:req.body.Furnished ,
CarParking:req.body.CarParking ,
Lift :req.body.Lift,
Electricity:req.body.Electricity ,
Facing:req.body.Facing ,
DaysLeft: req.body.DaysLeft,
Name  :req.body.Name,
Mobile:req.body.Mobile ,
PostedBy:req.body.PostedBy,
SaleType:req.body.SaleType, 
FeaturedPackage:req.body.FeaturedPackage,
PPDPackage:req.body.PPDPackage,
Photo:req.body.Photo,
Email:req.body.Email,
City:req.body.City,
Area:req.body.Area ,
Pincode:req.body.Pincode ,
Address:req.body.Address,
Landmark:req.body.Landmark,
Latitude:req.body.Latitute , 
Longitude:req.body.Longitude
		})
				res.status(200).json("Success");
			}
	else{
		res.status(200).json("Unauthorized User");
	}
})
}catch(err){
	res.status(200).json(err);
}
})

module.exports = router