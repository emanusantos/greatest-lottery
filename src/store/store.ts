import { configureStore } from "@reduxjs/toolkit";
import { gameReducers } from "./gameSlice";
import { regReducer } from "./regSlice";

const store = configureStore({
    reducer: { games: gameReducers, reg: regReducer }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;