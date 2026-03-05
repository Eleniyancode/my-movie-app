// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXHzIuMiEKW-c-EehWdNzYHgvzyWlRNzc",
  authDomain: "my-movie-app-abf2a.firebaseapp.com",
  projectId: "my-movie-app-abf2a",
  storageBucket: "my-movie-app-abf2a.firebasestorage.app",
  messagingSenderId: "879755082531",
  appId: "1:879755082531:web:8b2f3eaca8ef93b5006a96",
  measurementId: "G-L35B40RFH8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
