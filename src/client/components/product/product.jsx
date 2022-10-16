import React from 'react'
import "./product.css"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import {useNavigate} from "react-router-dom"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SubItem from './selector';
import {useSelector} from "react-redux";



function Product() {

    let navigate=useNavigate(); 
    const category=useSelector((state)=>state.category.categoryName);
    const subcategory=useSelector((state)=>state.womanCategory.subCategoryName);

    let x=[];
    // media query
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    // {category==="1"? x=imagedata.NEW:category==="2"? x=imagedata.man:x=imagedata.kids}    
    x=SubItem(subcategory);
    console.log(subcategory);
    return (
    <section id="p" >
    <div className='single-div'>
   
    <ImageList sx={{mt:-25}} cols={matches ? 1:2 }>

      { x.map((item) => (
        <>
        <ImageListItem key={item.id}>
            <div className='d'>
                <a onClick={()=>{navigate("/detailedProduct",{ state: { items:item } })}}>
                <img className='product-img'
                    src={item.src}
                    loading="lazy">
                </img>
                </a>
            </div>
            <ImageListItemBar
            title={<h3 id="t">{item.title} </h3>} 
            subtitle={<span><h5 id="p">{item.price} USD</h5></span>}
            
            position="below"
          />
        </ImageListItem>
        </>
      ))}
    </ImageList>
</div>
        
       

   </section>
  )
}

export default Product;




