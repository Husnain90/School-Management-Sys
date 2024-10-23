import { configureStore } from "@reduxjs/toolkit";
import { StudentSlice } from "./studentSlice";

export const  store = configureStore({
    reducer:{
        student :StudentSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;