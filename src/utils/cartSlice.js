import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "Cart",
    initialState :{
        items:[]
    },
    reducers:{
        addItem : (state,action) =>{
            const itemToAdd = action.payload;
            const existingItem = state.items.find ((item) =>{
                return item.card.info.id == itemToAdd.card.info.id;
            })
            if (existingItem){
                existingItem.quantity +=1;
            }else{
                 state.items.push({
                ...itemToAdd,
                quantity: 1,
                });
            }
        },
        removeItem : (state, action) =>{
            state.items.pop();
        },
        clearCart :(state,action) =>{
            return {items :[]};
        }
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;