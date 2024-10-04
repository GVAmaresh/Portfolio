import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IContact } from "../Interface";
import { updateContactMapsDetails } from "../firebase/firebaseContactDetails";

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
      addContactMap(state, action: PayloadAction<string>) {
        state.map= action.payload;
        updateContactMapsDetails(action.payload)
      },
    },
  });
  
  export const {
    fetchContactStart,
    fetchContactSuccess,
    addContactMap,
    fetchContactFailure,
  } = contactSlice.actions;
  
  export default contactSlice.reducer;
  