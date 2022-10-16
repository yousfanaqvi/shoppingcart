import { createSlice } from "@reduxjs/toolkit";

const categorySlice= createSlice({
    name:"category",
    initialState:{
        categoryName:"1"
    },
    reducers:{
        
        changeCategory(state,action){
            state.categoryName= action.payload;
            
        }
        
    }

})
export const categoryActions= categorySlice.actions;
export default categorySlice;