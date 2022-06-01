// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGLyF_wwOovP8aQtZnuptXimiioYrUa7c",
  authDomain: "mydictionary-66c5e.firebaseapp.com",
  projectId: "mydictionary-66c5e",
  storageBucket: "mydictionary-66c5e.appspot.com",
  messagingSenderId: "431617638782",
  appId: "1:431617638782:web:256fe59f7c619dc2a0332f",
  measurementId: "G-VEVGL4XNTB",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
