import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface Games {
    type: string; 
    description: string;
    range: number;
    price: number;
    'max-number': number;
    color: string;
    'min-cart-value': number;
}

const initialState: { savedGames: string[] } = { savedGames: [] }


const cartSlice = createSlice({
    name: 'game',
    initialState: initialState,
    reducers: {
        saveCartBets: (state, action) => {
            state.savedGames.push(...action.payload);
        }
    }
})

export const selectBets = (state: RootState) => state.games.savedGames;
export const { saveCartBets } = cartSlice.actions;
export const gameReducer = cartSlice.reducer;