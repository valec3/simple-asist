import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import db from "./config.js";

class StudentService {
  constructor() {
    this.collection = collection(db, "students");
  }

  async addStudent(student) {
    try {
      const docRef = await addDoc(this.collection, student);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async updateStudent(id, student) {
    try {
      const docRef = doc(this.collection, id);
      await setDoc(docRef, student);
      console.log("Document updated with ID: ", id);
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  }
}

const studentService = new StudentService();
export default studentService;
