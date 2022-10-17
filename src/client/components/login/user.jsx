import React, {useEffect, useState} from 'react'
import {useSelector}from "react-redux";
import { useLocation } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import axios from 'axios';
import "./log.css";
function User(props) {

  const { state } = useLocation();
  const [userData, setUserData]= useState({
    fname:"",
    lname:"",
    email:""
  });

    React.useEffect(() => {
      if(state.email!==""){
      axios.get(process.env.REACT_APP_BACKEND_URL+`/getdata`
      ,{
        params: {
          email: state.email
        }}).then(res => {
            //  d.push(res.data);
             res.data.map((item,index) => {
              setUserData(item);
             });
          })
          .catch(function (error) {
              console.log(error);
          })
        }
     });
  
  
      
    const loginstate=useSelector((state)=>state.login.isloggedIn);
  return (
    <div className='success-container'>
    <Box sx={{ flexGrow: 1 , p:10 } }>
        <Grid container spacing={2}  >
            <Grid item xs={12} md={12} 
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start">
            {loginstate?<div>
              <h4>User details:</h4><br></br>
              <h3>First Name: <span className="userData">{userData.fname}</span></h3><br></br>
              <h3>Last Name:<span className="userData">{userData.lname}</span></h3><br></br>
              <h3>Email Id:<span className="userData">{userData.email}</span></h3>


            </div>:<h3> User not found</h3>}  
            
            </Grid>
        </Grid>
    </Box>
      </div>
   
  )
}

export default User