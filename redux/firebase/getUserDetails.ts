import { ref, get, DataSnapshot } from "firebase/database";
import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { db } from "./firebaseConfig";
import { IAbout_ME, IContact, IProjects, IResume, IUserDetails } from "../Interface";
import {
  fetchUserDetailsStart,
  fetchUserDetailsSuccess
} from "../redux/userDetails";
import { fetchAboutMeStart, fetchAboutMeSuccess } from "../redux/aboutDetails";
import { fetchProjectsFailure, fetchProjectsStart, fetchProjectsSuccess } from "../redux/projectDetails";
import { fetchResumeFailure, fetchResumeStart, fetchResumeSuccess } from "../redux/resumeDetails";
import { fetchContactStart, fetchContactSuccess } from "../redux/contactDetails";


export const fetchUserDetails = createAsyncThunk<
  IUserDetails,
  void,
  { rejectValue: string }
>("user/fetchUserDetails", async (_, { dispatch, rejectWithValue }) => {
  dispatch(fetchUserDetailsStart());
  try {
    const userDetailsRef = ref(db, "userDetails");
    const snapshot: DataSnapshot = await get(userDetailsRef);

    if (snapshot.exists()) {
      const userDetails: IUserDetails = snapshot.val();
      dispatch(fetchUserDetailsSuccess(userDetails));
      return userDetails;
    } else {
      return rejectWithValue("No user details available");
    }
  } catch (error) {
    return rejectWithValue("Error fetching user details from Firebase");
  }
});

export const fetchAboutDetails = createAsyncThunk<
  IAbout_ME,
  void,
  { rejectValue: string }
>(
  "user/fetchAboutDetails",
  async (__NEXT_HTTPS_AGENT, { dispatch, rejectWithValue }) => {
    dispatch(fetchAboutMeStart());
    try {
      const aboutDetailsRef = ref(db, "aboutMe");
      const snapshot: DataSnapshot = await get(aboutDetailsRef);
      if (snapshot.exists()) {
        const aboutDetails: IAbout_ME = snapshot.val();
        dispatch(fetchAboutMeSuccess(aboutDetails));
        return aboutDetails;
      } else {
        return rejectWithValue("No user details available");
      }
    } catch (error) {
      return rejectWithValue("Error fetching user details from Firebase");
    }
  }
);


export const fetchProjectDetails = createAsyncThunk<
  IProjects,
  void,
  { rejectValue: string }
>(
  "projects/fetchProjectDetails",
  async (_, { dispatch, rejectWithValue }) => {
    dispatch(fetchProjectsStart()); 
    try {
      const projectDetailsRef = ref(db, "projects");
      const snapshot: DataSnapshot = await get(projectDetailsRef);
      
      if (snapshot.exists()) {
        const projectDetails: IProjects = snapshot.val();
        dispatch(fetchProjectsSuccess(projectDetails)); 
        return projectDetails;
      } else {
        return rejectWithValue("No project details available");
      }
    } catch (error) {
      dispatch(fetchProjectsFailure("Error fetching project details from Firebase")); 
      return rejectWithValue("Error fetching project details from Firebase");
    }
  }
);


export const fetchResumeDetails = createAsyncThunk<
  IResume,
  void,
  { rejectValue: string }
>(
  "resume/fetchResumeDetails",
  async (_, { dispatch, rejectWithValue }) => {
    dispatch(fetchResumeStart()); 
    try {
      const resumeDetailsRef = ref(db, "resume"); 
      const snapshot: DataSnapshot = await get(resumeDetailsRef);
      
      if (snapshot.exists()) {
        const resumeDetails: IResume = snapshot.val(); 
        dispatch(fetchResumeSuccess(resumeDetails));
        return resumeDetails;
      } else {
        return rejectWithValue("No resume details available");
      }
    } catch (error) {
      dispatch(fetchResumeFailure("Error fetching resume details from Firebase"));
      return rejectWithValue("Error fetching resume details from Firebase");
    }
  }
);

export const fetchContactDetails = createAsyncThunk<
  IContact,
  void,
  { rejectValue: string }
>(
  "contact/fetchContactDetails",
  async (_, { dispatch, rejectWithValue }) => {
    dispatch(fetchContactStart());
    try {
      const contactDetailsRef = ref(db, "contact"); 
      const snapshot: DataSnapshot = await get(contactDetailsRef);
      if (snapshot.exists()) {
        const contactDetails: IContact = snapshot.val();
        dispatch(fetchContactSuccess(contactDetails));
        return contactDetails;
      } else {
        return rejectWithValue("No contact details available");
      }
    } catch (error) {
      return rejectWithValue("Error fetching contact details from Firebase");
    }
  }
);
