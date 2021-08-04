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

const initialState: { savedGames: any } = { savedGames: [] }


const cartSlice = createSlice({
    name: 'game',
    initialState: initialState,
    reducers: {
        saveCartBets: (state, action) => {
            state.savedGames.push(...action.payload);
            console.log(state.savedGames);
        }
    }
})

export const { saveCartBets } = cartSlice.actions;
export const gameReducers = cartSlice.reducer;