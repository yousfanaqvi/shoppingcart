import React, {useState, useEffect} from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import "./register.css"
import {useNavigate} from "react-router-dom"
import axios from "axios";

function Register() {
  let navigate=useNavigate();
 
  
    const [data,setData]= useState({
        email:"",
        password:"",
        cPassword:""

    });

    const [passMatch, setPassmatch]=useState("true");

    React.useEffect(() => {
        validatePassword();
      }, [data]);
    
      const validatePassword = () => {
        data.password === data.cPassword
          ? setPassmatch(true)
          : setPassmatch(false);
      };

      const handleChange = (e) => {
        const { id, value } = e.target;
        setData((prevState) => ({
          ...prevState,
          [id]: value
        }));
      };
        const sendData = (e) => {
        e.preventDefault();
        validatePassword();

        if (passMatch && data.password.length>=8){
        let userData = {
            "fname": e.target.fname.value,
            "lname": e.target.lname.value,
            "password":e.target.password.value,
            "cPassword":e.target.cp.value,
            "email":e.target.email.value,
        }
        //console.log(data);
        const headers = {
          "Content-Type":"application/json",
    
        }
    
        return fetch(process.env.REACT_APP_BACKEND_URL+'/registerUser',{
          method:"POST",
          headers,
          body:JSON.stringify(userData)
        }).then(response => {
          if(response.statusText==="found")
          {
            console.log("hello"+response.statusText);
            alert("This email has been registered before")
          }
          else{
             navigate("/registered");

          }
          //alert("registered");
          console.log("response",response)
        })
        .catch(err => {
          console.log("Error",err)
        })
    }
    else{
      alert("Check for Errors please");
    }
      }
      

  return (
<Box sx={{ flexGrow: 1, ml:50, mr:50, mt:10} }>
    
      <div className='form-container'>
        <div className="form-signin m-auto ">
        <div className='form-floating'>
            <h2>PERSONAL DETAILS</h2>
        <form  onSubmit={sendData} >
        
        <div className='form-info'>
        <div className="form-floating ">
        <input
          aria-label="Email"
          type="email"
          className="form-control"
          id="email"
          name="email"
          placeholder="Enter email"
          value={data.email}
          onChange={handleChange}
          aria-required="true"
          required
        />
            <label htmlFor="floatingInput email">EMAIL</label>
        </div>
        <div className='delivery-form-name'>
        <div className="form-floating ">
        <input
          aria-label="Password"
          type="password"
          className="form-control"
          id="password"
          name="pass"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
          aria-required="true"
          required
        />
            <label htmlFor="floatingInput ">PASSWORD - must be more than 7 characters long</label>
        </div>
        <div className="form-floating ">
        <input
          aria-label="Confirm Password"
          type="password"
          className={`form-control ${passMatch ? "" : "input-error-border"}`}
          id="cPassword"
          name="cp"
          placeholder="Confirm Password"
          value={data.cPassword}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={passMatch ? true : false}

          required
        />
            <label htmlFor="floatingInput ">CONFIRM PASSWORD</label>
        </div>
        </div>
        <div className='delivery-form-name'>
         <div className="form-floating ">
            <input type="text" name="fname" className="form-control" id="fname" placeholder="ENTER YOUR FIRST NAME" required/>
            <label htmlFor="floatingInput">FIRST NAME</label>
        </div>
        
        <div className="form-floating  ">   
            <input type="text" name="lname" className="form-control" id="lname" placeholder="ENTER YOUR LAST NAME" required/>
            <label htmlFor="floatingInput ">LAST NAME</label>
        </div>
        </div>
        
        </div>

        <div className="input-error">
          {data.password !== data.cPassword ? "" : ""}
        </div>
        <div className="input-error">
          {passMatch ? "" : "Error: Passwords do not match"}<br></br>
          {data.password.length<=7 &&data.password.length >0 ? "Error: Password must be more than 7 characters long":null}

        </div>
        <button type='submit' name="submit" className='save-btn ' >Save </button>
        </form>
        </div>
    </div>
    
</div>

</Box>
    
)
  
}

export default Register