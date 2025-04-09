// firebaseConfig.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAxKIS4siexE9EJyeu7xQRLnzUIheSmB6I",
  authDomain: "teacher-portal-680fc.firebaseapp.com",
  projectId: "teacher-portal-680fc",
  storageBucket: "teacher-portal-680fc.appspot.com", // فقط اینو تغییر دادم: ".app" → ".appspot.com"
  messagingSenderId: "873553287861",
  appId: "1:873553287861:web:db22251f13db229bdbfcfc",
  measurementId: "G-2CPQFQ497Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
