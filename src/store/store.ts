import { configureStore } from "@reduxjs/toolkit";
import { gameReducers } from "./gameSlice";
import { regReducer } from "./regSlice";

const store = configureStore({
    reducer: { gameReducers, regReducer }
})

export default store;