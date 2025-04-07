// src/utils/addProject.js
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export const addProject = async (project) => {
try {
    await addDoc(collection(db, "projects"), project);
    console.log("✅ Project added!");
} catch (error) {
    console.error("🔥 Failed to add project:", error);
}
};
