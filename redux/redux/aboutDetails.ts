import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAbout_ME, ITestimonials, IWhatIamDoing } from "../Interface";

const initialState: IAbout_ME = {
  introduction: [],
  whatIamDoing: [],
  whatIKnow: [],
  testimonials: [],
};

const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    fetchAboutMeStart(state) {
      state.introduction = [];
      state.whatIamDoing = [];
      state.whatIKnow = [];
      state.testimonials = [];
    },
    fetchAboutMeSuccess(state, action: PayloadAction<IAbout_ME>) {
      state.introduction = action.payload.introduction;
      state.whatIamDoing = action.payload.whatIamDoing;
      state.whatIKnow = action.payload.whatIKnow;
      state.testimonials = action.payload.testimonials;
    },
    fetchAboutMeFailure(state, action: PayloadAction<string>) {
      state.introduction = [];
      state.whatIamDoing = [];
      state.whatIKnow = [];
      state.testimonials = [];
      console.error(action.payload);
    },
    addIntroduction(state, action: PayloadAction<string[]>) {
      state.introduction = action.payload;
    },
    addWhatIamDoing(state, action: PayloadAction<IWhatIamDoing[]>) {
      state.whatIamDoing = action.payload;
    },
    addwhatIKnow(state, action: PayloadAction<string[]>) {
      state.whatIKnow = action.payload;
    },
    addtestimonials(state, action: PayloadAction<ITestimonials[]>) {
      state.testimonials = action.payload;
    },
  },
});

export const {
  fetchAboutMeStart,
  fetchAboutMeSuccess,
  fetchAboutMeFailure,
  addIntroduction,
  addWhatIamDoing,
  addwhatIKnow,
  addtestimonials,
} = aboutSlice.actions;

export default aboutSlice.reducer;
