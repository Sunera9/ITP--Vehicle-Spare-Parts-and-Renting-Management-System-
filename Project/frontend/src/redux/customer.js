import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./features/auth/userauthslice";
import userFilterReducer  from "./features/auth/userfilterSlice";

export const customer = configureStore({
  reducer: {
    auth: authReducer,
    userFilter: userFilterReducer,
  },
});