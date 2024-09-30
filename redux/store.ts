import { configureStore } from "@reduxjs/toolkit";
import userDetailsSlice from "@/redux/redux/userDetails";
import aboutSlice from "./redux/aboutDetails";
import resumeSlice from './redux/resumeDetails';
import projectSlice from './redux/projectDetails';
import contactSlice from './redux/contactDetails';
export const store = configureStore({
  reducer: {
    user: userDetailsSlice,
    about: aboutSlice,
    resume:resumeSlice,
    project:projectSlice,
    contact:contactSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
