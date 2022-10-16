import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function registered() {
  
  return (
    <div className='success-container'>
    <Box sx={{ flexGrow: 1 , p:10 } }>
        <Grid container spacing={2}  >
            <Grid item xs={12} md={12} 
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start">
            <h2>Congratulations! you have been Registered <br></br> Happy shopping..</h2>                
            </Grid>
        </Grid>
    </Box>
      </div>
   
  )
}

export default registered