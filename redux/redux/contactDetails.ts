import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IContact } from "../Interface";

const initialState: IContact = {
    map: "",
  };
  
  const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
      fetchContactStart(state) {
        state.map = "";
      },
      fetchContactSuccess(state, action: PayloadAction<IContact>) {
        state.map = action.payload.map;
      },
      fetchContactFailure(state, action: PayloadAction<string>) {
        console.error(action.payload);
      },
    },
  });
  
  export const {
    fetchContactStart,
    fetchContactSuccess,
    fetchContactFailure,
  } = contactSlice.actions;
  
  export default contactSlice.reducer;
  