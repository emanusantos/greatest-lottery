import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { User } from '../types/types';

const initialState: { users: any, currentUserId: number | null, session: string } = { users: [], currentUserId: null, session: '' }

const regSlice = createSlice({
    name: 'reg',
    initialState,
    reducers: {
        register: (state, action) => {
            state.users.push(action.payload);
        },
        mergeGames: (state, action) => {
            state.users[action.payload.index].games.push(...action.payload.arr);
        },
        setId: (state, action) => {
            state.currentUserId = action.payload;
        },
        authSession: (state, action) => {
            state.session = action.payload;
        }
    }
});

export const { register, mergeGames, setId, authSession } = regSlice.actions;

export const selectUsers = (state: RootState) => state.reg.users;
export const token = (state: RootState) => state.reg.session;
export const id = (state: RootState) => state.reg.currentUserId;

export const regReducer = regSlice.reducer;