import { configureStore } from "@reduxjs/toolkit";
import userDetailsSlice from "@/redux/redux/userDetails";
export const store = configureStore({
  reducer: {
    user: userDetailsSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;