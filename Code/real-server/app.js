const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const signupRoute = require("./Routes/signup")
const loginRoute = require("./Routes/login");
const addRoute = require("./Routes/addProperty");
const proRoute = require("./Routes/property");
const logRoute = require("./Routes/logout");
const passRoute = require("./Routes/password");
const cors = require("cors");
app.use(cors());
app.use(express.json({limit: "30mb", extended:true}));
app.use(express.urlencoded({ extended: false }));
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true},(err)=>{
    if(!err)
    {
        console.log("Database connect successfully");
    }
    else
    {
        console.log(err);
    }
});

app.listen(process.env.PORT || 8800,(err)=>{
    if(!err)
    {
        console.log(`Server is running on port`);
    }
    else
    {
        console.log(err);
    }
});

app.get("/",(req,res)=>{
    res.send("Welcome to Home Page");
});


app.use("/signup", signupRoute);
app.use("/login", loginRoute);
app.use("/addProperty",addRoute);
app.use("/property",proRoute);
app.use("/logout",logRoute);
app.use("/password",passRoute);