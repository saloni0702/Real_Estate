import "./general.css";
import React, {useContext} from 'react';
import {multiStepContext} from "./stepContext";


const GeneralInfo = () => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    //console.log(userData);
    const handleUpload = async (e) => {
        const Photo = await fileTobase64(e.target.files[0]);
        setUserData({...userData,"Photo":Photo});
    }

    const fileTobase64 = (file) =>{
        return new Promise((resolve,reject)=>{
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () =>{
                resolve(reader.result)
            }
            reader.onerror = (err)=>{
                reject(err)
            }
        })
    }
    return (
        <>

        <div className="BasicInfo">
            <div className="PT">
                <div >
                    <label className="inputtxt">Name</label>
                    <div >
                        <input className="property" value={userData['Name']} onChange={(e)=>setUserData({...userData,"Name":e.target.value})}/>

                    </div>
                </div>

                <div  className="divide">

                    <label className="inputtxt" >Mobile</label>

                    <div>
                    <input className="property" placeholder="Enter Mobile Number" value={userData['Mobile']} onChange={(e)=>setUserData({...userData,"Mobile":e.target.value})}></input>
                    </div>

                </div>
            </div>


            <div className="PT">
                <div> 

                    <label className="inputtxt">Posted by</label>

                    <div>
                    <select className="property" value={userData['PostedBy']} onChange={(e)=>setUserData({...userData,"PostedBy":e.target.value})}>
                        <option>Posted By</option>
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                            <option>D</option>
                        </select>
                    </div>

                </div>


                <div className="divide">

                    <label className="inputtxt">Sale Type</label>


                    <div >
                        <select className="property" value={userData['SaleType']} onChange={(e)=>setUserData({...userData,"SaleType":e.target.value})}>
                        <option>Please Select</option>
                            <option>Trust</option>
                            <option>Court</option>
                            <option>Mortgage</option>
                            <option>Lease</option>
                        </select>
                    </div>
                </div>

            </div>

            <div className="PT">

                <div >

                    <label className="inputtxt">Featured Package</label>


                    <div >
                        <select className="property" value={userData['FeaturedPackage']} onChange={(e)=>setUserData({...userData,"FeaturedPackage":e.target.value})}>
                        <option>Please Select</option>
                            <option>30-40 lakh</option>
                            <option>60-70 lakh</option>
                            <option>80-90 lakh</option>
                            <option>1-2 crore</option>
                        </select>
                    </div>
                </div>
                <div className="divide">

                    <label className="inputtxt">PPD Package</label>


                    <div >
                        <select className="property" value={userData['PPDPackage']} onChange={(e)=>setUserData({...userData,"PPDPackage":e.target.value})}>
                        <option>Please Select</option>
                            <option>5-10 lakh</option>
                            <option>10-15 lakh</option>
                            <option>15-20 lakh</option>
                            <option>20-40 lakh</option>
                        </select>
                    </div>

                </div>


            </div>
            <div className="imageFile">
                <input id="default-btn" type="file" onChange={(e) => {handleUpload(e)}}/>
            </div>
            

            <div className="basicbtns">
                <div>
                    <button className="cancelbtn" onClick={()=>setStep(2)} type="submit" >Previous</button>
                </div>
                <div>
                    <button className="savebtn" onClick={()=>setStep(4)} type="submit" >Save & Continue</button>
                </div>
            </div>

        </div>
        </>
    )
}

export default GeneralInfo;