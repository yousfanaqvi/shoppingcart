import { createSlice } from "@reduxjs/toolkit";

const womanCatSlice= createSlice({
    name:"womanCategory",
    initialState:{
        subCategoryName:"NEW"
    },
    reducers:{
        changesubCategory(state,action){
            state.subCategoryName= action.payload;
            
        }
        
    }

})
export const womanCatActions= womanCatSlice.actions;
export default womanCatSlice;