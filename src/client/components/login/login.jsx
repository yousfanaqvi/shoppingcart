// import React from 'react'
// import {useNavigate} from "react-router-dom"
// import "./login.css"
// import Menu from "../menu/menu"
// import {loginActions} from '../../../store/loginSlice';
// import {useDispatch} from "react-redux";
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// function Login() {
   
//     let navigate=useNavigate();
//     const dispatch=useDispatch();

//     const state=Menu.hidden;
//     console.log(state);

    
//       // login

//       function sendData (e) {
//         e.preventDefault();

//         let data = {
//             "email":e.target.email.value,
//             "password":e.target.password.value,
//         }
//         const headers = {
//           "Content-Type":"application/json",
    
//         }
    
//         return fetch(`http://localhost:3000/loginUser`,{
//           method:"POST",
//           headers,
//           body:JSON.stringify(data)
//         }).then(response => {
//           console.log(response);
//           if(response.statusText==="Not found")
//           {
//             dispatch(loginActions.foundUser(false
//               ));
//               navigate("/user");
//         }
//           else{
//             dispatch(loginActions.foundUser(true
//               ));
//              navigate("/user");

//           }
//         }).catch(err => {
//           console.log("Error",err)
//         })

//       }
    

//   return (
//     <section id="login" >
//     <Box sx={{ flexGrow: 1 }} >
//       <Grid container spacing={2}>
//         <Grid item xs={12} md={6} lg={6} className="login-container">
//           <div class="form-signin m-auto ">
//             <div className='form-floating'>
//               <h2>LOG IN</h2>
//                 <form onSubmit={sendData}>
//                 <div className="form-floating ">
//                   <input type="email" name="email" className="form-control" id="floatingInput" placeholder="ENTER YOUR EMAIL" required/>
//                   <label for="floatingInput">EMAIL</label>
//                 </div>
//                 <div className="form-floating ">
//                    <input type="password" name="password" className="form-control" id="floatingInput" placeholder=" ENTER YOUR PASSWORD" required/>
//                   <label for="floatingInput">PASSWORD</label>
//                 </div>
//                 <button type='submit' className='btnLogin'>LOG IN</button>   
//                 </form>
//             </div>
//             </div>
//             </Grid>
//             <Grid item xs={12} md={6} lg={6}  className="register-container">
//             <div className="form-signin m-auto">
//               <div className='form-floating reg'>
//                 <h2>REGISTER</h2>
//               <div className=' register-content' >
//               <div>
//                 <p>IF YOU STILL DON'T HAVE AN ACCOUNT, USE THIS OPTION TO ACCESS THE REGISTRATION FORM</p>
//                 <p>PROVIDE YOUR DETAILS TO MAKE PURCHASES EASIER.</p>
//               </div>
//                 <button className="register-btn" onClick={()=>{navigate("/register")}}>CREATE ACCOUNT</button>
//               </div>
//               </div>
//             </div>
         
//         </Grid>        
//       </Grid>
//     </Box>
//     </section>
//   )
// }

// export default Login