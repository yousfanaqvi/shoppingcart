import React , {useState} from 'react'
import {useSelector} from "react-redux";
import "./header.css"
import Menu from "../menu/menu"
import logo from "../../images/logo.png"
import Badge from '@mui/material/Badge';
import {useNavigate} from "react-router-dom"
import {AiOutlineShopping} from "react-icons/ai"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Header = () => {

  let navigate=useNavigate();
  const quantity=useSelector((state)=>state.cart.totalQuantity);

  return (
    <header >
    <Box  sx={{ flexGrow: 1, m:2}  }>
        <Grid container spacing={1}>
          <Grid item xs={10} md={8} >
          <div className='header-left'>
            <Menu  />
              <div>
                <button className='logo-btn' onClick={()=>{navigate("/")}}><img  className="logo-pic" src={logo} alt="pic"/></button>
              </div>
          </div>
          </Grid>
          
          <Grid item xs={2} md={2}>
          <div className='header-right' >
          <a className='login-btn' onClick={()=>{navigate("/login")}}>LOGIN</a>
          <Badge badgeContent={quantity} color="success">
            <button className='cart-btn' onClick={()=>{navigate("/cart")}}><AiOutlineShopping/></button>
          </Badge>
         
        </div>
          </Grid>
        </Grid>
    </Box>
      <div className='container header_container'>

      
      
        
       
      </div>    
     </header>
  )
}

export default Header