import { createSlice } from "@reduxjs/toolkit";

interface Games {
    type: string; 
    description: string;
    range: number;
    price: number;
    maxNumber: number;
    color: string;
    minCartValue: number;
}

const initialGameState: Games[] = [
    {
        type: '', 
        description: '',
        range: 0,
        price: 0,
        maxNumber: 0,
        color: '',
        minCartValue: 0
    }
];

const gameSlice = createSlice({
    name: 'game',
    initialState: initialGameState,
    reducers: {
        setCurrentGame(state) {

        }
    }
})

export const gameActions = gameSlice.actions;
export const gameReducers = gameSlice.reducer;