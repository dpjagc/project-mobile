import { createSlice } from "@reduxjs/toolkit";
import { Toast } from 'toastify-react-native';

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
            cartSlice.caseReducers.calculateTotals(state);
            Toast.success("Se elimino correctamente el producto del carrito");
        },
        updateCartAmount: (state, action) => {
            const cartItem = state.cartItems.find(item => item.id === action.payload.id);
            cartItem.amount = Number(action.payload.amount);
            cartSlice.caseReducers.calculateTotals(state);
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            for (const item of state.cartItems) {
                amount += item.amount;
                total += item.amount * item.price;
            }
            state.amount = amount;
            state.total = total;
        },
        addToCart: (state, action) => {
            const cartItem = state.cartItems.find(item => item.id === action.payload.id);
            if (!cartItem) {
                state.cartItems.push(action.payload);
            } else {
                cartItem.amount += action.payload.amount;
            }
            cartSlice.caseReducers.calculateTotals(state);
            Toast.success('Producto añadido al carrito!');

        }
    }
})

export const { clearCart, removeItem, updateCartAmount, decrease, calculateTotals, addToCart } = cartSlice.actions;

export default cartSlice.reducer;