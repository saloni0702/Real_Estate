import { useState } from "react"
import { Link ,useNavigate} from "react-router-dom";
import axios from "axios";
import Logo from "./logo";
import "./signup.css"

const Login = () => {

    const [userdata, setData] = useState({mail: "", password: ""})
    const navigate = useNavigate();
    function handlemail(e){
        
            const mail = e.target.value;
            setData(prevForm => ({...prevForm,mail:mail}))
        
    }
  
    function handlepassword(e){
       
            const password = e.target.value;
            setData(prevForm => ({...prevForm,password:password}))
    

    }
  
    function handlelogin(e) {
        e.preventDefault();
           axios({
                url:"https://real-estate-server-pro.herokuapp.com/login/put",
                method : "POST",
                headers :{

                },
                data:userdata
               })
               .then((res)=>
               {
                localStorage.setItem("authorization",res.data.authToken);
                navigate("/ViewProperty");
                setData({mail:"",password:""})
                console.log(res);
               })
               .catch((err)=>
               {
                alert("UserID and Password does not match");
                // setData({mail:"",password:""})
                console.log(err);
               })
          
    }

    return (
        <div className="maincontainer">
            <div className="container">
                <div className="logo">
                    <Logo />
                </div>

                <form className="form" onSubmit={handlelogin}>
                    <div >
                        <p className="heading">Enter your credentials details</p>
                    </div>
                    <br />
                    <div className="form-group" >
                        <input className="mail" type="email" placeholder="Mail ID" onChange = {handlemail}></input>
                    </div>
                    <br />
                    <div className="form-group">
                        <input className="password" type="password" placeholder="Password" onChange={handlepassword}></input>
                    </div>
                    <div className="form-group">
                    <Link to="/Password"><a className="forgot">Forgot Password?</a></Link>
                    </div>
                    <br />

                    <br />
                    <div className="form-group">
                        <input className="btn" value="Sign in" type="submit" />
                    </div>
                    <br />

                    <div className="form-group">
                        <Link to="/Signup"><a className="sign">Sign up</a></Link>
                    </div>
                    <br/>
                     
                </form>
            </div>

           
        </div>
    )
}
export default Login;