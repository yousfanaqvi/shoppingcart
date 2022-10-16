import React, {useEffect} from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from '../../../store/cartSlice';
import { useLocation } from "react-router-dom";

import "./checkout.css"

function Success() {
    const cartTotalamount=useSelector((state)=>state.cart.cartTotalPrice);
    const dispatch=useDispatch();
    const { state } = useLocation();

    useEffect(() => {

      dispatch(cartActions.emptycart());
    });
   
    console.log(state.price);
  return (
    <div className='success-container'>
    <Box sx={{ flexGrow: 1 , p:10 } }>
        <Grid container spacing={2}  >
            <Grid item xs={12} md={12} 
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start">
            <CheckBoxIcon sx={{ fontSize: 60 }} color="success"/> 
                <h3>Thank you!</h3>
                <h3> Payment done Successfully</h3>
                <h3> Amount paid: ${state.price}</h3>
               
            </Grid>
        </Grid>
    </Box>
      </div>
  )
}

export default Success