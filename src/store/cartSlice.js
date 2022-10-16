import { createSlice } from "@reduxjs/toolkit";


const cartSlice= createSlice({
    name:"cart",
    initialState:{
        itemsList:[],
        totalQuantity:0,
        cartTotalPrice:0,
        ispaymentDone:false
    },
    reducers:{
        addItem(state,action){
            const newitem= action.payload;
            // if item is already in the cart -- increase quantity
            const existingItem=state.itemsList.find((item)=>item.id===newitem.id && item.size === newitem.size);
            if(existingItem)
            {
                existingItem.quantity+=1;
                existingItem.totalPrice=existingItem.totalPrice+newitem.price;
                
            }
            else{
                state.itemsList.push({
                    id:newitem.id,
                    price:newitem.price,
                    title:newitem.title,
                    src:newitem.src,
                    size:newitem.size,
                    quantity:1,
                    totalPrice:newitem.price
                    
                    
                })
            }
            state.totalQuantity++;
            

        },
        removeItem(state,action){
            const newitem= action.payload;
            // if item is already in the cart -- with 1 quantity
            const existingItem=state.itemsList.find((item)=>item.id===newitem.id && item.size === newitem.size);
            if( existingItem.quantity===1 && existingItem.size === newitem.size  )
            {
                state.itemsList=state.itemsList.filter(item => item!==existingItem) ;
            }
            else if ( existingItem.quantity >=1){
                existingItem.quantity--;
                existingItem.totalPrice=existingItem.totalPrice-existingItem.price;
                
            }
            state.totalQuantity--;
                

        },
        cartPrice(state,action){
            state.cartTotalPrice=action.payload;
        },
        emptycart(state){
            state.itemsList=[];
            state.totalQuantity=0;
            state.cartTotalPrice=0;
        }
    }

})
export const cartActions= cartSlice.actions;
export default cartSlice;