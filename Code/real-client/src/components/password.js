import { Link, useNavigate } from "react-router-dom";
import Logo from "./logo";
import { useState } from "react";
import axios from "axios";
import "./signup.css"

const Password = () => {
    const [userdata,Setval] = useState({
        mail: "",
        password: "",
        confirmpassword: ""
    })
    const navigate = useNavigate();

    function handlemail(e){
       
            const mail = e.target.value;
            Setval(prevForm => ({...prevForm,mail:mail}))
        
    }
  
    function handlepassword(e){
       
            const password = e.target.value;
            Setval(prevForm => ({...prevForm,password:password}))
        

    }
  
    function handleconfirm(e)
    {
       
            Setval(prevForm => ({...prevForm,confirmpassword:e.target.value}))
    }

    function handlesignup(e) {
        e.preventDefault();
        if(userdata.mail.length === 0)
        {
            alert("Please enter your mail");
        }
        else if(userdata.password.length < 6)
        {
            alert("Please enter password with minimum 6 letters");
        }
        else
        {
            if(userdata.password !== userdata.confirmpassword)
            {
                alert("Password doesn't match");
            }
            else
            {
    
               axios({
                url:"https://real-estate-server-pro.herokuapp.com/password/add",
                method : "POST",
                headers :{

                },
                data:userdata
               })

               .then((res)=>
               {
                navigate("/");
                Setval({mail:"",password:"",confirmpassword:""})
                console.log(res);
               })
               .catch((err)=>
               {
                //Setval({mail:"",password:"",confirmpassword:""})
                alert('User Not exists')
                // console.log(err);
               })
            }
        }
          
    }
    return (
        <div className="maincontainer">
            <div className="container">
                <div className="logo">
                    <Logo />
                </div>
              
                <form className="form" onSubmit={handlesignup}>
                    <div >
                        <p className="heading">Set New Password</p>
                    </div>
                    <br/> 
                    <div className="form-group">
                        <input className="mail" type="email" placeholder="Mail ID" onChange={handlemail}></input>
                    </div>
                    <br/> 
                    <div className="form-group">
                        <input className="password" type="password" placeholder="Password" onChange = {handlepassword}></input>
                    </div>
                    <br/> 
                    <div className="form-group">
                        <input className="confirm" type="password" placeholder="Confirm Password" onChange= {handleconfirm} ></input>
                    </div>
                    <br/> 
                    <br/>
                    <div className="form-group">
                        <input className="btn" value="Set Password" type="submit" />
                    </div>    
                </form>
            </div>

            
        </div>
    )
}
export default Password;