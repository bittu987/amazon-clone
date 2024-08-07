// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIBD3LWeeO1NZHKx2VeB0N3Uzmko55RjI",
  authDomain: "authentication-verifies.firebaseapp.com",
  projectId: "authentication-verifies",
  storageBucket: "authentication-verifies.appspot.com",
  messagingSenderId: "162711039522",
  appId: "1:162711039522:web:0ad38212b6fd483bb6247b",
  measurementId: "G-HSNYZ00PGM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default app;