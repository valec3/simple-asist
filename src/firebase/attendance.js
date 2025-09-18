import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import db from "./config.js";

class AttendanceService {
  constructor() {
    this.collection = collection(db, "attendances");
  }
  async addAttendance(attendance) {
    try {
      const docRef = await addDoc(this.collection, attendance);
      console.log("Document written with ID: ", docRef.id);
      return {
        response: true,
        message: "Asistencia registrada",
      };
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async updateAttendance(id, attendance) {
    try {
      const docRef = doc(this.collection, id);
      await setDoc(docRef, attendance);
      console.log("Document updated with ID: ", id);
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  }
}

const attendanceService = new AttendanceService();
export default attendanceService;
