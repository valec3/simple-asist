import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDy-DT2xKqBsW23ggd_19oeHNRnlGWV_Lg",
  authDomain: "asistencia-app-d27d6.firebaseapp.com",
  projectId: "asistencia-app-d27d6",
  storageBucket: "asistencia-app-d27d6.firebasestorage.app",
  messagingSenderId: "1074593788308",
  appId: "1:1074593788308:web:d96fbc3f039853ef015f81",
  measurementId: "G-027G1R0EH4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
