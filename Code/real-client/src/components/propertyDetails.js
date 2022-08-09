import "./general.css";
import React, {useContext} from 'react';
import {multiStepContext} from "./stepContext";


const PropertyDetails = () => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    //console.log(userData);
    return (
        <>
        <div className="BasicInfo">
            
            <div className="PT">
                <div >
                    <label className="inputtxt">Length</label>

                    <div>
                        <input className="property" placeholder="Example:1000" value={userData['Length']} onChange={(e)=>setUserData({...userData,"Length":e.target.value})}></input>
                    </div>
                </div>

                <div  className="divide">

                    <label className="inputtxt">Breadth</label>

                    <div>
                        <input className="property" placeholder="Example:1000" value={userData['Breadth']} onChange={(e)=>setUserData({...userData,"Breadth":e.target.value})}></input>
                    </div>

                </div>
            </div>


            <div className="PT">
                <div> 

                    <label className="inputtxt" >Total Area</label>

                    <div>
                        <input className="property" placeholder="Example:7500" value={userData['TotalArea']} onChange={(e)=>setUserData({...userData,"TotalArea":e.target.value})}></input>
                    </div>

                </div>


                <div className="divide">

                    <label className="inputtxt">Area Unit</label>


                    <div >
                        <select className="property" value={userData['AreaUnit']} onChange={(e)=>setUserData({...userData,"AreaUnit":e.target.value})}>
                        <option>Area Unit</option>
                            <option>square yard</option>
                            <option>square meter</option>
                            <option>square feet</option>
                            <option>Hectare</option>
                        </select>
                    </div>
                </div>

            </div>

            <div className="PT">

                <div >

                    <label className="inputtxt">No of BHK</label>


                    <div >
                        <select className="property" value={userData['NoOfBHK']} onChange={(e)=>setUserData({...userData,"NoOfBHK":e.target.value})}>
                        <option>Select No of BHK</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                </div>
                <div className="divide">

                    <label className="inputtxt">No of Floor</label>


                    <div >
                        <select className="property" value={userData['NoOfFloor']} onChange={(e)=>setUserData({...userData,"NoOfFloor":e.target.value})}>
                        <option>Select No of Floor</option>
                            <option>4</option>
                            <option>6</option>
                            <option>8</option>
                            <option>10</option>
                            <option>12</option>
                        </select>
                    </div>

                </div>


            </div>

            <div className="PT">


                <div >

                    <label className="inputtxt">Attached</label>
                    <div>
                    <select className="property" value={userData['Attached']} onChange={(e)=>setUserData({...userData,"Attached":e.target.value})}>
                    <option>Select Attached</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                    </div>
                </div>
                <div className="divide">
                    <label className="inputtxt">Western Toilet</label>
                    <div>
                    <select className="property" value={userData['WesternToilet']} onChange={(e)=>setUserData({...userData,"WesternToilet":e.target.value})}>
                    <option>Select Western Toilet</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                    </div>
                </div>

            </div>
            <div className="PT">
                <div> 

                   <label className="inputtxt">Furnished</label>


                    <div >
                        <select className="property" value={userData['Furnished']} onChange={(e)=>setUserData({...userData,"Furnished":e.target.value})}>
                        <option>Select Furnished</option>
                            <option>No</option>
                            <option>Semi</option>
                            <option>Full</option>
                        </select>
                    </div>

                </div>


                <div className="divide">

                    <label className="inputtxt">Car Parking</label>


                    <div >
                        <select className="property" value={userData['CarParking']} onChange={(e)=>setUserData({...userData,"CarParking":e.target.value})}>
                        <option>Select Car Parking</option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div>
                </div>

            </div>
            <div className="PT">
                <div> 

                    <label className="inputtxt">Lift</label>


                    <div >
                        <select className="property" value={userData['Lift']} onChange={(e)=>setUserData({...userData,"Lift":e.target.value})}>
                        <option>Select Lift</option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div>

                </div>


                <div className="divide">

                    <label className="inputtxt" >Electricity</label>

                    <div>
                        <input className="property" placeholder="Example: 3 phase" value={userData['Electricity']} onChange={(e)=>setUserData({...userData,"Electricity":e.target.value})}></input>
                    </div>
                </div>

            </div>
                <div className="PT">
                <div> 

                    <label className="inputtxt">Facing</label>


                    <div >
                        <select className="property" value={userData['Facing']} onChange={(e)=>setUserData({...userData,"Facing":e.target.value})}>
                        <option>Select Facing</option>
                            <option>East</option>
                            <option>West</option>
                            <option>North</option>
                            <option>South</option>
                        </select>
                    </div>

                </div>


                <div className="divide">

                    <label className="inputtxt" >Days Left</label>

                    <div>
                        <input className="property" placeholder="Example: 03" value={userData['DaysLeft']} onChange={(e)=>setUserData({...userData,"DaysLeft":e.target.value})}></input>
                    </div>
                </div>

            </div>
            <div className="basicbtns">
                <div>
                    <button className="cancelbtn" onClick={()=>setStep(1)} type="submit" >Previous</button>
                </div>
                <div>
                    <button className="savebtn" onClick={()=>setStep(3)} type="submit" >Save & Continue</button>
                </div>
            </div>

        </div>
        </>
    )
}

export default PropertyDetails;