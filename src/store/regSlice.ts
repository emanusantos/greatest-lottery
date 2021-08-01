import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const initialState: { users: string[] } = { users: [] }

const regSlice = createSlice({
    name: 'reg',
    initialState,
    reducers: {
        register: (state, action) => {
            state.users.push(action.payload);
        }
    }
});

export const { register } = regSlice.actions;

export const selectUser = (state: RootState) => state.reg.users;

export const regReducer = regSlice.reducer;