// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5ce2b.firebaseapp.com",
  projectId: "mern-estate-5ce2b",
  storageBucket: "mern-estate-5ce2b.appspot.com",
  messagingSenderId: "795273833578",
  appId: "1:795273833578:web:b4e90418eab4fc3a97ae13"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);