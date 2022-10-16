import React , {useState}from 'react'
import StripeCheckout from 'react-stripe-checkout'
import {useSelector} from "react-redux";
import Fab from '@mui/material/Fab';
import ShoppingCartCheckoutSharpIcon from '@mui/icons-material/ShoppingCartCheckoutSharp';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import CartList from './cartList';
import Form from './form';
import "./checkout.css"
import { useNavigate} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {cartActions} from '../../../store/cartSlice';
function Checkout() { 
  const formstate=useSelector((state)=>state.shipping.isFormcomplete);
  const dispatch=useDispatch();

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        border:0,
        
        
      }));


 const cartItems=useSelector((state)=>state.cart);
 const navigate = useNavigate();

 const[product,setproduct]=useState({
    name:"zara cart total",
    price:cartItems.cartTotalPrice*100,
    productBy:"zara.com"
  })

  //this is sent to the url that takes product info in body

  const makePayment = token =>{
    const body ={
      token, product
    }
    const headers = {
      "Content-Type":"application/json",

    }

    // return fetch(`http://localhost:3000/payment`,{
      return fetch(process.env.PORT +`/payment`,{
      method:"POST",
      headers,
      body:JSON.stringify(body)
    }).then(response => {
       console.log("response",response)
      navigate('/success',{ state: { price:cartItems.cartTotalPrice } });

    }).catch(err => {
      console.log("Error",err)
      navigate('/failed');
    })
  }

  // this is to send form data
  



  return (

    <div className='check-container' >
    <Box sx={{ flexGrow: 1 , p:10 } }>
      <Grid container spacing={2} >
        <Grid item xs={12} md={8}>
            
            {cartItems.cartTotalPrice!==0?<Form/>:null}
            
        </Grid>
        <Grid item xs={12} md={4}>
            <Item>
                <h2>ORDER SUMMMARY</h2>
                <CartList/>
                <h4>total amount: ${cartItems.cartTotalPrice}</h4>
                {(cartItems.cartTotalPrice!==0 && formstate)&&
                <StripeCheckout 
                    stripeKey='pk_test_51LNl64ATz3reXnQSNjTE7VDZ98ywrkpSyDaZ5dt3HBwhYToOuDhq6QxKB71frcqnplNrEkbC5aHg0vtzHqoimwWk00Xi66AxHi'
                    token={makePayment} 
                    name="order# 123"
                    amount={cartItems.cartTotalPrice*100} >
                    <Fab aria-label="checkout" size="medium" >
                        <ShoppingCartCheckoutSharpIcon  />  
                    </Fab>    
                </StripeCheckout>}
                
            </Item>
        </Grid>
       </Grid>
    </Box> 
        
    </div>
  )
}

export default Checkout