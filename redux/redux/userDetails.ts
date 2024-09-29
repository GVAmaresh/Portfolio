import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDetails, UserState } from "../Interface";
import { fetchUserDetails } from "../firebase/getUserDetails";

const initialState: UserState = {
  userName: null,
  userPhoto: null,
  loading: false,
  error: null,
};


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUserDetailsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchUserDetailsSuccess(state, action: PayloadAction<UserDetails>) {
      state.loading = false;
      state.userName = action.payload.userName; // Adjust based on UserDetails structure
      state.userPhoto = action.payload.userPhoto; // Adjust based on UserDetails structure
    },
    fetchUserDetailsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchUserDetailsStart,
  fetchUserDetailsSuccess,
  fetchUserDetailsFailure,
} = userSlice.actions;

export default userSlice.reducer;
