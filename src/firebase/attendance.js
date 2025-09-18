import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import db from "./config.js";

class AttendanceService {
  constructor() {
    this.collection = collection(db, "attendances");
  }
  async addAttendance(attendance) {
    try {
      const formattedData = await this.formatAttendanceData(attendance);
      const attendanceRef = doc(db, "attendances", formattedData.date);

      await setDoc(attendanceRef, formattedData);
      console.log("Document written with date: ", formattedData.date);
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
  async formatAttendanceData(attendance) {
    const { students } = attendance;
    const today = new Date();
    const date = today.toISOString().split("T")[0];
    const totalPresent = students.filter((s) => s.estado === "Presente").length;
    const totalAbsent = students.filter((s) => s.estado === "Ausente").length;
    const totalLate = students.filter((s) => s.estado === "Tardanza").length;
    return {
      date,
      dayOfWeek: today.toLocaleDateString("es-ES", { weekday: "long" }),
      records: students.reduce((acc, s) => {
        acc[s.id] = {
          studentId: s.id,
          status: s.estado.toLowerCase(),
          full_name: s.full_name,
          code: s.code,
        };
        return acc;
      }, {}),
      totalPresent,
      totalAbsent,
      totalLate,
      createdAt: today.toISOString(),
    };
  }
}

const attendanceService = new AttendanceService();
export default attendanceService;
