import { configureStore } from "@reduxjs/toolkit";
import { gameReducer } from "./cartSlice";
import { regReducer } from "./regSlice";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { combineReducers } from "redux";

const reducers = combineReducers({
    games: gameReducer, reg: regReducer
})

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;