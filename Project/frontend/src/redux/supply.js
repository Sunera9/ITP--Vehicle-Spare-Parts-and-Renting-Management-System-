import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/supplySlice"
//import filterReducer from "./features/auth/filterSlice"


export const supply = configureStore({
    reducer: {
        auth: authReducer,
        //filter: filterReducer,
        
    },
});