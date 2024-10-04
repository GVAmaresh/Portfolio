import { ref, set } from "firebase/database";
import { db } from "./firebaseConfig";
import { IEducation, IExperience } from "../Interface";

export const updateEducationDetails = async (education: IEducation) => {
    try {
      const userRef = ref(db, "resume/education");
      await set(userRef, education);
    } catch (error) {
      console.error("Error updating education in Realtime Database:", error);
    }
  };

  export const updateExperienceDetails = async (experience: IExperience) => {
    try {
      const userRef = ref(db, "resume/experience");
      await set(userRef, experience);
    } catch (error) {
      console.error("Error updating experience in Realtime Database:", error);
    }
  };

  export const updateSkillsDetails = async (skills: string[]) => {
    try {
      const userRef = ref(db, "resume/skills");
      await set(userRef, skills);
    } catch (error) {
      console.error("Error updating Skills in Realtime Database:", error);
    }
  };