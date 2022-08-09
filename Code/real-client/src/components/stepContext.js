import React from 'react';
import {useState} from 'react';
import AddProperty from "./addProperty";
import "./general.css";
import {useNavigate} from "react-router-dom"; 
import axios from "axios";

export const multiStepContext = React.createContext();

const StepContext = () =>{
	const [currentStep, setStep] = useState(1);
	const [userData,setUserData] = useState([]);
	const [finalData,setFinalData] = useState([]);

	const authToken = localStorage.getItem("authorization");
	const navigate = useNavigate();

	function  submitData(e) {
		// console.log(userData)
		// setFinalData({...finalData,userData})
		e.preventDefault();
		// const pt1 = userData.PropertyType.length;
		// const pt2 = userData.TotalArea.length;
		// const pt3 = userData.Mobile.length;
		// const pt4 = userData.DaysLeft.length;
		// console.log(pt1,pt2,pt3,pt4);
		if(userData.PropertyType === undefined || userData.TotalArea === undefined || userData.DaysLeft === undefined || userData.Mobile === undefined){
			alert("Enter neccessary details")
		}
		else
		{
		axios({
			url:"https://real-estate-server-pro.herokuapp.com/addProperty",
			method:"POST",
			headers:{
				authorization: authToken
			},
			data:userData
		}).then((res)=>{
			console.log(res)
			navigate("/ViewProperty");
		})
		.catch((err)=>{
			navigate("/");
		})
		}
	}

	return(
		<>
			<multiStepContext.Provider value={{currentStep, setStep, userData, setUserData, finalData, setFinalData, submitData}} className="step3">
				<AddProperty/>
			</multiStepContext.Provider>
		</>
	)
}

export default StepContext; 