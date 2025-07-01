import { createSlice } from '@reduxjs/toolkit';

const initialState = {

};

const GlobalContextSlice = createSlice({
	name: 'globalContext',
	initialState,
	reducers: {

	},
});

export const { } = GlobalContextSlice.actions;

export const GlobalContextReducer = GlobalContextSlice.reducer;
