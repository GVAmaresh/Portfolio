// firebase/firebaseAboutDetails.ts
import { ref, set } from "firebase/database";
import { db } from "./firebaseConfig";
import { ITestimonials, IWhatIamDoing } from "../Interface";

export const updateIntroductionDetails = async (introduction: string[]) => {
  try {
    const userRef = ref(db, "aboutMe/introduction");
    await set(userRef, introduction);
  } catch (error) {
    console.error("Error updating introduction in Realtime Database:", error);
  }
};

export const updateWhatIamDoingDetails = async (whatIamDoing: IWhatIamDoing[]) => {
  try {
    const userRef = ref(db, "aboutMe/whatIamDoing");
    await set(userRef, whatIamDoing);
  } catch (error) {
    console.error("Error updating whatIamDoing in Realtime Database:", error);
  }
};

export const updateWhatIKnowDetails = async (whatIKnow: string[]) => {
  try {
    const userRef = ref(db, "aboutMe/whatIKnow");
    await set(userRef, whatIKnow);
  } catch (error) {
    console.error("Error updating whatIKnow in Realtime Database:", error);
  }
};

export const updateTestimonialsDetails = async (testimonials: ITestimonials[]) => {
  try {
    const userRef = ref(db, "aboutMe/testimonials");
    await set(userRef, testimonials);
  } catch (error) {
    console.error("Error updating testimonials in Realtime Database:", error);
  }
};
