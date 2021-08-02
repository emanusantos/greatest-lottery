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

const initialGameState: Games[] = [
    {
        type: '', 
        description: '',
        range: 0,
        price: 0,
        'max-number': 0,
        color: '',
        'min-cart-value': 0
    }
]
    

const gameSlice = createSlice({
    name: 'game',
    initialState: initialGameState,
    reducers: {
        setCurrentGame(state) {

        }
    }
})

export const gameActions = gameSlice.actions;
export const defaultGame = initialGameState;
export const gameReducers = gameSlice.reducer;