import { createSlice } from "@reduxjs/toolkit";


const shippingSlice= createSlice({
    name:"shipping",
    initialState:{
        isFormcomplete:false,
    },
    reducers:{
        formComplete(state,actions){
            state.isFormcomplete=actions.payload;
            console.log(state.isFormcomplete)
        }
    }

})
export const shippingActions= shippingSlice.actions;
export default shippingSlice;