import { createSlice } from "@reduxjs/toolkit";

export interface Games {
    type: string; 
    description: string;
    range: number;
    price: number;
    'max-number': number;
    color: string;
    'min-cart-value': number;
}



const cartSlice = createSlice({
    name: 'game',
    initialState: {cart: []},
    reducers: {
        setCurrentGame(state) {

        }
    }
})

export const gameActions = cartSlice.actions;
export const gameReducers = cartSlice.reducer;