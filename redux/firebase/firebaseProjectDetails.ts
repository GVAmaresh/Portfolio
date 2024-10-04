import { ref, set } from "firebase/database";
import { IMyProjects } from "../Interface";
import { db } from "./firebaseConfig";

export const updateProjectDetails = async (projects: IMyProjects[]) => {
    try {
      const userRef = ref(db, "projects/my_projects");
      await set(userRef, projects);
    } catch (error) {
      console.error("Error updating projects in Realtime Database:", error);
    }
  };

  export const updateProjectGroupsDetails = async (projectGroup: string[]) => {
    try {
      const userRef = ref(db, "projects/groups");
      await set(userRef, projectGroup);
    } catch (error) {
      console.error("Error updating project group in Realtime Database:", error);
    }
  };