import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const initialState: { users: any, currentUser: object | null } = { users: [], currentUser: null }

const regSlice = createSlice({
    name: 'reg',
    initialState,
    reducers: {
        register: (state, action) => {
            state.users.push(action.payload);
        },
        currentUser: (state, action) => {
            state.currentUser = action.payload;
        }
    }
});

export const { register, currentUser } = regSlice.actions;

export const selectUsers = (state: RootState) => state.reg.users;
export const currentLoggedUser = (state: RootState) => state.reg.currentUser;

export const regReducer = regSlice.reducer;