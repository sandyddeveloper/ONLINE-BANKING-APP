import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./services/apiSlice";
import  authReducer  from "./features/authSlice";
import { useAppSelector } from "./hooks";
export const makeStore = () =>
    configureStore({
        reducer: {
            [apiSlice.reducerPath]: apiSlice.reducer,
            auth: authReducer,
        }, 
        devTools: process.env.NODE_ENV !== "production",
    });

export const store = makeStore(); 

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


