import React,{useState} from 'react'
import { useLocation } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from '../../../store/cartSlice';
import "./detailedProduct.css"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
function Bucket() {

const { state } = useLocation();
const id=state.items.id;
const title=state.items.title;
const price=state.items.price;
const src=state.items.src;
const[size,setSize]=useState("");

const handleChange = (event) => {
  setSize(event.target.value);
};

const dispatch=useDispatch();
const addItem = () => {
  if(size !==""){
  dispatch(cartActions.addItem({
    id,
    title,
    price, 
    src, 
    size
  }))
  setSize("");
  document.getElementById("add-btn").innerHTML="Adding...";
  setTimeout(() => {
    document.getElementById("add-btn").innerHTML="Add to cart";
  }, 1000);

  }
  else {
    alert("plesse select the size of your item");
  }
}

  return (
    
    <section >
    <div className='prodcuctDetail-container'>
    
      <div className='content'>
        <h2 id="t">CONTENTS AND CARE</h2>
        <p>
            Care for water: produced using less water.
            <br></br>
            Mauris non nunc ut felis posuere fringilla eu laoreet mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel nulla non leo facilisis vestibulum
        </p>
      </div>
      <div >
        <img className='productimage' src={state.items.src} />
      </div>
      <div className='size-container'>
          <h2 id="t">
            {state.items.title}
          </h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper odio ex, quis interdum dui eleifend vitae.
          </p>
          <span>{state.items.price} USD</span>
          <Box  sx={{ minWidth: 120 }}>
            <FormControl >
                <Select
                  value={size}
                  label="Size"
                  onChange={handleChange}
                >
                  <MenuItem value="s">small</MenuItem>
                  <MenuItem value="m">medium</MenuItem>
                  <MenuItem value="L">large</MenuItem>
                </Select>
            </FormControl>
          </Box>
          
          <button className='addBtn' id="add-btn" onClick={addItem}>Add TO CART</button>
      </div>
    </div>
     
    </section>
  )
 
}

export default Bucket