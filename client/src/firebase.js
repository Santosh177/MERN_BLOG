// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-67e8b.firebaseapp.com",
  projectId: "mern-blog-67e8b",
  storageBucket: "mern-blog-67e8b.appspot.com",
  messagingSenderId: "461194894005",
  appId: "1:461194894005:web:358d9529a072ff1e44bcfc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);