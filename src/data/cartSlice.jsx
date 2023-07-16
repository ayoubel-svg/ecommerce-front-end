import { createSlice } from "@reduxjs/toolkit";


const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: []
    },
    reducers: {
        add_to_cart: (state, action) => {
            const newItem = {
                ...action.payload
            }
            state.cartItems.push(newItem)
        },
        delete_item: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
        }
    }
})

export default CartSlice.reducer
export const { add_to_cart, delete_item } = CartSlice.actions
