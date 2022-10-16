import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import loginSlice from "./loginSlice";
import categorySlice from "./categorySlice"
import womanCatSlice from "./womanCat";
import shippingSlice from "./shippingSlice";
const store= configureStore({
    reducer:{
        cart:cartSlice.reducer,
        category:categorySlice.reducer,
        womanCategory:womanCatSlice.reducer,
        login:loginSlice.reducer,
        shipping:shippingSlice.reducer
    }
});
export default store;