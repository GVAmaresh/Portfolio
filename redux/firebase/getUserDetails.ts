import { ref, get, DataSnapshot } from "firebase/database";
import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { db } from "./firebaseConfig";
import { UserDetails } from "../Interface";
import { fetchUserDetailsStart, fetchUserDetailsSuccess } from "../redux/userDetails";


//   export const userDetails_firebase = async (): Promise<UserDetails | null> => {
//     try {
//       const userDetailsRef = ref(db, "userDetails");
//       const snapshot: DataSnapshot = await get(userDetailsRef);

//       if (snapshot.exists()) {
//         const userDetails: UserDetails = snapshot.val();
//         console.log(userDetails);
//         return userDetails;
//       } else {
//         console.log("No userDetails available");
//         return null;
//       }
//     } catch (error) {
//       console.error("Error fetching userDetails:", error);
//       throw error;
//     }
//   };

export const fetchUserDetails = createAsyncThunk<
  UserDetails,
  void,
  { rejectValue: string }
>("user/fetchUserDetails", async (_, { dispatch, rejectWithValue }) => {
  dispatch(fetchUserDetailsStart()); 
  try {
    const userDetailsRef = ref(db, "userDetails");
    const snapshot: DataSnapshot = await get(userDetailsRef);

    if (snapshot.exists()) {
      const userDetails: UserDetails = snapshot.val();
      dispatch(fetchUserDetailsSuccess(userDetails)); 
      return userDetails;
    } else {
      return rejectWithValue("No user details available");
    }
  } catch (error) {
    return rejectWithValue("Error fetching user details from Firebase");
  }
});
