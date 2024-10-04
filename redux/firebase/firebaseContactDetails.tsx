import { ref, set } from "firebase/database";
import { db } from "./firebaseConfig";

export const updateContactMapsDetails = async (map: string) => {
    try {
      const userRef = ref(db, "contact/map");
      await set(userRef, map);
    } catch (error) {
      console.error("Error updating project group in Realtime Database:", error);
    }
  };