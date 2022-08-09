import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./viewProperty.css";
import Header from "./header";
import Sidebar from "./sideBar";
import axios from "axios";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
const ViewProperty = () => {

  const authToken = localStorage.getItem("authorization");
  const [postData, setPostdata] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const navigate = useNavigate();
 
  function handleAddProperty(e) {
    navigate("/Property");
  }
  useEffect(() => {
    fetch("https://real-estate-server-pro.herokuapp.com/property", { method: "GET", headers: { authorization: authToken } })

      .then((data) => {
        return data.json();

      })
      .then((pData) => {
        setPostdata(pData.reverse())

      }).catch((err)=>{
        navigate("/")
      });
  }, []);
  function handleStatus(e){
    if(e.target.value==="Unsold")
    {
      e.target.value = "Sold";
    }
  }
  
  return (
    <div>
      <Sidebar />
      <Header />
      <div className="box10">
        <form className="search-bar">
          <input onChange={(e) => { setSearchTerm(e.target.value) }} type="text" placeholder="Search Here" name="q" />
          <button><img src="/images/search.svg"/></button>
        </form>
        <button type="submit" value="+Add Property" onClick={handleAddProperty} className="button25">+Add Property</button>
      </div>
      <div className="BasicInfo2">
        <TableContainer className="tc">

          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead className="tablehead">
              <TableRow>
                <TableCell >PPDID</TableCell>
                <TableCell >Images</TableCell>
                <TableCell >Property</TableCell>
                <TableCell >Contact</TableCell>
                <TableCell >Area</TableCell>
                <TableCell >Views</TableCell>
                <TableCell >Status</TableCell>
                <TableCell >Days Left</TableCell>
                <TableCell >Action</TableCell>
              </TableRow>
            </TableHead>
            {postData.filter((user) => {
              const PPDID = "PPD" + user._id[user._id.length - 4] + user._id[user._id.length - 3] + user._id[user._id.length - 2] + user._id[user._id.length - 1]
              if (searchTerm === "") {
                return user;
              } else if (PPDID.toLowerCase().includes(searchTerm.toLowerCase())) {
                return user;
              }
            }).map((user, i) => {
              const PPDID = "PPD" + user._id[user._id.length - 4] + user._id[user._id.length - 3] + user._id[user._id.length - 2] + user._id[user._id.length - 1]
              return (

                <TableBody>
                  <TableRow>
                    <TableCell>{PPDID}</TableCell>
                    <TableCell><img src="/images/images.svg"/></TableCell>
                    <TableCell>{user.PropertyType}</TableCell>
                    <TableCell>{user.Mobile}</TableCell>
                    <TableCell>{user.TotalArea}</TableCell>
                    <TableCell>{user.Views}</TableCell>
                    <TableCell><input type="submit" value="Unsold" onClick={handleStatus} className="sold"/></TableCell>
                    <TableCell>{user.DaysLeft}</TableCell>
                    <TableCell><img src="/images/eye-fill.svg"/><img src="/images/pencil-fill.svg"/></TableCell>
                  </TableRow>
                </TableBody>
              )
            })}
          </Table>
        </TableContainer>
      </div>
    </div>





  )
}

export default ViewProperty;