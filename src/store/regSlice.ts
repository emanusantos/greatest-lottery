import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const initialState: { users: string[], currentUser: object | null } = { users: [], currentUser: null }

const regSlice = createSlice({
    name: 'reg',
    initialState,
    reducers: {
        register: (state, action) => {
            state.users.push(action.payload);
        },
        logRegisteredUser: (state, action) => {
            state.currentUser = action.payload;
        }
    }
});

export const { register, logRegisteredUser } = regSlice.actions;

export const selectUser = (state: RootState) => state.reg.users;
export const setUser = (state: RootState) => state.reg.currentUser;

export const regReducer = regSlice.reducer;