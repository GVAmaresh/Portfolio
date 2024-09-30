import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IEducation, IExperience, IResume } from "../Interface";

const initialState: IResume = {
  experience: {
    logo: "",
    title: "",
    myWork: [],
  },
  education: {
    logo: "",
    title: "",
    myEducation: [],
  },
  skills: [],
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    fetchResumeStart(state) {
      state.experience = { logo: "", title: "", myWork: [] };
      state.education = { logo: "", title: "", myEducation: [] };
      state.skills = [];
    },
    fetchResumeSuccess(state, action: PayloadAction<IResume>) {
      state.experience = action.payload.experience;
      state.education = action.payload.education;
      state.skills = action.payload.skills;
    },
    fetchResumeFailure(state, action: PayloadAction<string>) {
      state.experience = { logo: "", title: "", myWork: [] };
      state.education = { logo: "", title: "", myEducation: [] };
      state.skills = [];
      console.error(action.payload);
    },
    addExperience(state, action: PayloadAction<IExperience>) {
      state.experience = action.payload;
    },
    addEducation(state, action: PayloadAction<IEducation>) {
      state.education = action.payload;
    },
    addSkills(state, action: PayloadAction<string[]>) {
      state.skills = action.payload;
    },
  },
});

export const {
  fetchResumeStart,
  fetchResumeSuccess,
  fetchResumeFailure,
  addExperience,
  addEducation,
  addSkills,
} = resumeSlice.actions;

export default resumeSlice.reducer;
