import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserDetails } from "../Interface";

const initialState: IUserDetails = {
  userName: "",
  photo: "",
  email: "",
  phoneNumber: 0,
  birthDate: "",
  location: "",
  linkedin_url: "",
  leetcode_url: "",
  github_url: "",
  field: [""],
  loading: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUserDetailsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchUserDetailsSuccess(state, action: PayloadAction<IUserDetails>) {
      state.loading = false;
      state.userName = action.payload.userName;
      state.photo = action.payload.photo;
      state.email = action.payload.email;
      state.phoneNumber = action.payload.phoneNumber;
      state.birthDate = action.payload.birthDate;
      state.location = action.payload.location;
      state.linkedin_url = action.payload.linkedin_url;
      state.leetcode_url = action.payload.leetcode_url;
      state.github_url = action.payload.github_url;
      state.field = action.payload.field;
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
