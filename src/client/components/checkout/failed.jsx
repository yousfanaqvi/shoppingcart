import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CancelIcon from '@mui/icons-material/Cancel';
import "./checkout.css"
import { useNavigate} from 'react-router-dom';

function Failed() {
    const navigate = useNavigate();

  return (
    <div className='success-container'>
    <Box sx={{ flexGrow: 1 , p:10 } }>
        <Grid container spacing={2}  >
            <Grid item xs={12} md={12} 
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start">
            <CancelIcon sx={{ fontSize: 60 }} color="error"/> 
                <h3> Transaction failed</h3>
                <button  className="tryAgain-btn"onClick={()=>{navigate("/checkout")}}>Try again</button>
                
            </Grid>
        </Grid>
    </Box>
      </div>
  )
}

export default Failed