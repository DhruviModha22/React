// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCaKd8ceN4fNCQ_xQRnJkmqbXzbBjtKylc",
  authDomain: "react-demo-24413.firebaseapp.com",
  projectId: "react-demo-24413",
  storageBucket: "react-demo-24413.firebasestorage.app",
  messagingSenderId: "1096554173272",
  appId: "1:1096554173272:web:e2060610bc855634200b2d",
  measurementId: "G-33PFEK08NJ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export { auth, provider }; // 
