import React , {useEffect}from 'react'
//import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from '../../../store/cartSlice';
import {shippingActions} from '../../../store/shippingSlice';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import "./cart.css"
function Cart() {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  let navigate=useNavigate();
  const dispatch=useDispatch();
  const cartItems=useSelector((state)=>state.cart.itemsList);
  // subtotal
  let total=0;
  cartItems.forEach(element => {
    total=total+element.totalPrice;
  });  

  
  useEffect(() => {
    dispatch(cartActions.cartPrice(total));
   
  })
  
 
  // sending product to dispatch
    var id="",title="",price=0,src="",size="", quantity=0;
    function add(i,t,p,sr,si){
      id=i;
      title=t;
      price=p;
      src=sr;
      size=si;

      dispatch(cartActions.addItem({
          id,
          title,
          price, 
          src, 
          size
          }))
    }
  

    function remove(i,s,q){
      id=i;
      quantity=q;
      size=s;
      dispatch(cartActions.removeItem({
          id,
          size,
          quantity
          }))
    }


  return (
    <aside >
    
      <div className='single-div'>
      <h4 >CART</h4>
      {cartItems.length===0 ? <h3>YOUR CART IS EMPTY</h3>:
     
     <ImageList sx={{ }} cols={matches ? 1:2 } width={300}>
            {cartItems.map((item) => (
            <>
              <ImageListItem key={item.id}>
                <div className='cart-container'>
                  <div className='img-container'>
                    <img className='cart-img'
                      src={item.src}
                      loading="lazy">
                    </img>
                  </div>
                  <ImageListItemBar 
                  title={<h6 id="t">{item.title}</h6>}  
                  
                  subtitle={
                  <span>
                    Price:{item.price} USD <br></br>
                    Size: {item.size} <br></br>
                    Quantity: {item.quantity} <br></br>
                    Total Price: {item.totalPrice} USD
                    
                  </span>}
                  position="below"
                />                  
                  <div className='add-remove'>
                    <Fab aria-label="add" size="small" onClick={()=>{add(item.id,item.title,item.price,item.src,item.size)}} >
                      <AddIcon  /> 
                    </Fab>  
                    <p id="qNum">{item.quantity}</p>
                    <Fab aria-label="remove" size="small" onClick={()=>{remove(item.id,item.size,item.quantity)}} >
                      <RemoveIcon  /> 
                    </Fab> 
                  </div>
                  
                 
                
          </div>
                
              </ImageListItem>
            </>
          ))}
        </ImageList> }
      </div>
      {cartItems.length!==0 && 
      <div className='cart-checkout-container'>
          <h5>SUBTOTAL: {total} USD</h5>
          <button  className='continue-btn' onClick={()=>{navigate("/checkout")}}>CONTINUE</button>
      </div>}
      
    </aside>
  )
}

export default Cart