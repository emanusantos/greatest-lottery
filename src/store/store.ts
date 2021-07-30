import { configureStore } from "@reduxjs/toolkit";
import { gameReducers } from "./gameSlice";

const store = configureStore({
    reducer: gameReducers
})

export default store;