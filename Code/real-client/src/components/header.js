import "./header.css";
import React, {useState, useEffect} from "react";
import {useNavigate, useHistory} from "react-router-dom";

function Header(){

     const authToken = localStorage.getItem("authorization");
     const [uData, setUData] = useState([]);
    useEffect(() => {
    fetch("https://real-estate-server-pro.herokuapp.com/logout/show", { method: "GET", headers: { authorization: authToken } })

      .then((data) => {
        return data.json();

      })
      .then((pData) => {
        setUData(pData)

      })
})
    const navigate = useNavigate();
    function handleLogout(e) 
    {
        localStorage.setItem("authorization","");
        navigate("/")
          function preventBack() { window.history.forward(); }  
        setTimeout("preventBack()", 0);  
        window.onunload = ()=> {""}; 
       
    }
   
    return(
<div class="page2">
<div class="header2">
    {uData.map((user,i)=>{
        return(
            <div>
        <div class="heading1">    
              <p>{user.mail}</p>
                <select className="dropDown" onChange={handleLogout}>
                <option></option>
              <option>Logout</option>
            </select>  
         </div>
            <div className="id" >
                <p>User Id:{user._id}</p>
            </div>
            </div>
            )
        })}
  </div>
 </div>

    )
}

export default Header;