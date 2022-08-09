import "./general.css";
import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {multiStepContext} from "./stepContext";
import axios from "axios";


const LocationInfo = () => {
    const {setStep, userData, setUserData, submitData} = useContext(multiStepContext);
    //console.log(userData);

    return (
        <>

        <div className="BasicInfo">
            <div className="PT">
                <div >
                    <label className="inputtxt">Email</label>
                    <div >    
                    <input className="property" placeholder="Email" value={userData['Email']} onChange={(e)=>setUserData({...userData,"Email":e.target.value})}></input>
                    </div>
                </div>

                <div  className="divide">

                    <label className="inputtxt">City</label>

                    <div>
                        <select type="text" className="property" value={userData['City']} onChange={(e)=>setUserData({...userData,"City":e.target.value})}>
                        <option >Select City</option>
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                            <option>D</option>
                        </select>
                    </div>

                </div>
            </div>


            <div className="PT">
                <div> 

                    <label className="inputtxt">Area</label>

                    <div>
                    <select type="text" className="property" value={userData['Area']} onChange={(e)=>setUserData({...userData,"Area":e.target.value})}>
                        <option >Select Area</option>
                            <option>a</option>
                            <option>b</option>
                            <option>c</option>
                            <option>d</option>
                        </select>
                    </div>

                </div>


                <div className="divide">

                    <label className="inputtxt">Pincode</label>


                    <div >
                        <select className="property" value={userData['Pincode']} onChange={(e)=>setUserData({...userData,"Pincode":e.target.value})}>
                        <option>Select Pincode</option>
                            <option>123456</option>
                            <option>234567</option>
                            <option>345678</option>
                            <option>456789</option>
                        </select>
                    </div>
                </div>

            </div>

            <div className="PT">

                <div >

                    <label className="inputtxt">Address</label>


                    <div >
                    <input className="property" placeholder="Address" value={userData['Address']} onChange={(e)=>setUserData({...userData,"Address":e.target.value})}></input>
                    </div>
                </div>
                <div className="divide">

                    <label className="inputtxt">Landmark</label>


                    <div >
                    <input className="property" placeholder="Landmark" value={userData['Landmark']} onChange={(e)=>setUserData({...userData,"Landmark":e.target.value})}></input>
                    </div>

                </div>


            </div>

            <div className="PT">


                <div >

                    <label className="inputtxt" >Latitude</label>


                    <div>
                        <input className="property" placeholder="Latitude" value={userData['Latitude']} onChange={(e)=>setUserData({...userData,"Latitude":e.target.value})}></input>
                    </div>
                </div>
                <div className="divide">
                    <label className="inputtxt">Longitude</label>
                      
                      <div>
                    <input className="property" placeholder="Longitude" value={userData['Longitude']} onChange={(e)=>setUserData({...userData,"Longitude":e.target.value})}></input>
                    </div>
                </div>

            </div>

            <div className="basicbtns">
                <div>
                    <button className="cancelbtn" onClick={()=>setStep(3)} type="submit" >Previous</button>
                </div>
                <div>
                    <button className="savebtn" onClick={submitData} type="submit" >Add Property</button>
                </div>
            </div>

        </div>
        </>
    )
}

export default LocationInfo;