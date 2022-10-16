import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useSelector} from "react-redux";
import React from 'react'
import "./checkout.css"


function CartList() {

const length=useSelector((state)=>state.cart.itemsList.length);
const cartItems=useSelector((state)=>state.cart.itemsList);


  return (
    <Box sx={{ flexGrow: 1, p:1} }>
            <Grid container spacing={2}>
               <List
                    sx={{width: '100%',maxWidth: 360,bgcolor: 'background.paper',position: 'relative',
                    overflow: 'auto',maxHeight: 300,'& ul': { padding: 0 },}}>
                {cartItems.map((item) => (
                  <ListItem >
                  <Grid item xs={10} md={8}>
                  <ListItemAvatar>
                    <Avatar alt="Product"   src={item.src}    sx={{ width: 26, height: 46 }}/>
                    {item.title}
                </ListItemAvatar>
                </Grid>
                <Grid item xs={3} md={2}>
                <ListItemText  sx={{m:1 ,display:'grid', justifyContent:'flex-end', gridTemplateColumns:'30% 30%'}}/>
                  Size:{item.size} <br></br>
                  Quantity:{item.quantity} <br></br>
                  ${item.price}
                
                </Grid>   
                </ListItem>
              ))}
            </List>
              </Grid>
            
          </Box>
    
   
  );
}

export default CartList