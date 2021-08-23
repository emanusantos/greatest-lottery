import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { User } from '../types/types';

const initialState: { users: any, currentUser: User | null, session: string } = { users: [], currentUser: null, session: '' }

const regSlice = createSlice({
    name: 'reg',
    initialState,
    reducers: {
        register: (state, action) => {
            state.users.push(action.payload);
        },
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
        saveUserGames: (state, action) => {
            state.currentUser?.games?.push(...action.payload);
        },
        mergeGames: (state, action) => {
            state.users[action.payload.index].games.push(...action.payload.arr);
        },
        changeCredentials: (state, action) => {
            state.users[action.payload.index] = action.payload.newCredentials;
            state.currentUser = action.payload.newCredentials;
        },
        authSession: (state, action) => {
            state.session = action.payload;
        }
    }
});

export const { register, setCurrentUser, saveUserGames, mergeGames, changeCredentials, authSession } = regSlice.actions;

export const selectUsers = (state: RootState) => state.reg.users;
export const currentLoggedUser = (state: RootState) => state.reg.currentUser;
export const currentUserGames = (state: RootState) => state.reg.currentUser?.games;
export const token = (state: RootState) => state.reg.session;

export const regReducer = regSlice.reducer;