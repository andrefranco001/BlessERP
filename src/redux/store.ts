import { configureStore } from '@reduxjs/toolkit';
import { GlobalContextReducer } from './features/globalContext';

export const store = configureStore({
	reducer: {
		context: GlobalContextReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
