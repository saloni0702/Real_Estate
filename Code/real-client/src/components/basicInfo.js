import "./general.css";
import React, {useContext} from 'react';
import {multiStepContext} from "./stepContext";
import {useNavigate} from "react-router-dom";


const BasicInfo = () => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    const navigate = useNavigate();
    //console.log(userData);

    function handleCancel(e){
        setUserData("");
        navigate("/ViewProperty");
    }
    
    return (
        <>
        <div className="BasicInfo">
            
            <div className="PT">
                <div >
                    <label className="inputtxt">Property Type</label>
                    <div >
                        <select className="property" value={userData['PropertyType']} onChange={(e)=>setUserData({...userData,"PropertyType":e.target.value})}>
                        <option >Select Property Type</option>
                            <option >Home</option>
                            <option >Bunglow</option>
                            <option>Plot</option>
                            <option>Agriculture</option>
                            <option>House</option>
                        </select>

                    </div>
                </div>

                <div  className="divide">

                    <label className="inputtxt">Negotiable</label>

                    <div>
                        <select type="text" className="property" value={userData['Negotiable']} onChange={(e)=>setUserData({...userData,"Negotiable":e.target.value})}>
                        <option >Select Negotiable</option>
                            <option>No</option>
                            <option>Yes</option>
                            <option>You can try</option>
                        </select>
                    </div>

                </div>
            </div>


            <div className="PT">
                <div> 

                    <label className="inputtxt">Price</label>

                    <div>
                        <input className="property" placeholder="Example:10000" value={userData['Price']} onChange={(e)=>setUserData({...userData,"Price":e.target.value})}></input>
                    </div>

                </div>


                <div className="divide">

                    <label className="inputtxt">Ownership</label>


                    <div >
                        <select className="property" value={userData['Ownership']} onChange={(e)=>setUserData({...userData,"Ownership":e.target.value})}>
                        <option>Select Ownership</option>
                            <option>Private</option>
                            <option>Trust</option>
                            <option>Goverment</option>
                        </select>
                    </div>
                </div>

            </div>

            <div className="PT">

                <div >

                    <label className="inputtxt">Property Age</label>


                    <div >
                        <select className="property" value={userData['PropertyAge']} onChange={(e)=>setUserData({...userData,"PropertyAge":e.target.value})}>
                        <option>Select Property Age</option>
                            <option>0-5 years</option>
                            <option>5-10 years</option>
                            <option>10-15 years</option>
                            <option>15-20 years</option>
                        </select>
                    </div>
                </div>
                <div className="divide">

                    <label className="inputtxt">Property Approved</label>


                    <div >
                        <select className="property" value={userData['PropertyApproved']} onChange={(e)=>setUserData({...userData,"PropertyApproved":e.target.value})}>
                        <option>Property Approved</option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div>

                </div>


            </div>

            <div className="PT">


                <div >

                    <label className="inputtxt">Property Description</label>


                    <div>
                        <input className="property" value={userData['PropertyDescription']} onChange={(e)=>setUserData({...userData,"PropertyDescription":e.target.value})}></input>
                    </div>
                </div>
                <div className="divide">
                    <label className="inputtxt">Bank Loan</label>

                    <select className="property" value={userData['BankLoan']} onChange={(e)=>setUserData({...userData,"BankLoan":e.target.value})}>
                    <option>Bank Loan</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>

                </div>

            </div>

            <div className="basicbtns">
                <div>
                    <button className="cancelbtn" type="submit" onClick={handleCancel}>cancel</button>
                </div>
                <div>
                    <button className="savebtn" onClick={()=>setStep(2)} type="submit" >Save & Continue</button>
                </div>
            </div>

        </div>
        </>
    )
}

export default BasicInfo;