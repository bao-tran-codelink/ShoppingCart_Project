import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import cartReducers from "../features/cart/cartReducer";

export default configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducers,
    }
});