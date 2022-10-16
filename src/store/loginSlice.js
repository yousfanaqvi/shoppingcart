import { createSlice } from "@reduxjs/toolkit";


const loginSlice= createSlice({
    name:"login",
    initialState:{
        isloggedIn:false,
    },
    reducers:{
        foundUser(state,actions){
            state.isloggedIn=actions.payload;
        }
    }

})
export const loginActions= loginSlice.actions;
export default loginSlice;