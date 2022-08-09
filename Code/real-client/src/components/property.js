import React,{useState, useEffect} from "react";
import StepContext from "./stepContext";
import AddProperty from "./addProperty";
import {useNavigate} from "react-router-dom";

const Property = ()=> {
  const authToken = localStorage.getItem("authorization");
     const [uData, setUData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
    fetch("https://real-estate-server-pro.herokuapp.com/logout/show", { method: "GET", headers: { authorization: authToken } })

      .then((data) => {
        return data.json();

      }).catch((err)=>{
        navigate("/");
      })
    })
return(
    <div>
          <StepContext>
            <AddProperty/>
          </StepContext>
  </div>
)
}
export default Property;