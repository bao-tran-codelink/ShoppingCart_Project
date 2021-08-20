import { createSlice } from '@reduxjs/toolkit';
import { CART_ACTIONS } from '../../constants/enum';

export interface CartState {
  value: string;
}

const initialState: CartState = {
  value: '[]',
};

export const cartSlice = createSlice({
  initialState: initialState,
  name: 'cart',
  reducers: {
    add: addToCart,
    remove: removeFromCart,
    clear: clearCart,
  },
  extraReducers: {},
});

function addToCart(
  state: CartState,
  action: { payload: any; type: string }
): void {

}

function removeFromCart(
  state: CartState,
  action: { payload: any; type: string }
): void {
    
}

function clearCart(state: CartState): void {
  state = { ...initialState };
}

export default cartSlice.reducer;
