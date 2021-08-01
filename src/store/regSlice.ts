import { createSlice } from '@reduxjs/toolkit';

const initialState: { users: string[] } = { users: [] }

const regSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        register: (state, action) => {
            state.users.push(action.payload);
        }
    }
});

export const { register } = regSlice.actions;
export const regReducer = regSlice.reducer;