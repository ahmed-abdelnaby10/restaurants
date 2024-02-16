import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    initialState: [],
    name: "cartSlice",
    reducers: {
        addToCart: (state, action)=>{
            const repeatedProduct = state.find((product)=>product.id === action.payload.id)
            const clonedProduct = {...action.payload}
            if (repeatedProduct) {
                return false
            }else {
                state.push(clonedProduct)
            }
        },
        removeFromCart: (state, action)=>{
            return state.filter((product)=> product.id !== action.payload.id)
        },
        clearCart: (state, action)=>{
            return []
        }
    }
})
export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;