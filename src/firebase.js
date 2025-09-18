// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxdlu7SimSkmuXharDs0bZfeLxWAqni9g",
  authDomain: "netflix-gpt-210b3.firebaseapp.com",
  projectId: "netflix-gpt-210b3",
  storageBucket: "netflix-gpt-210b3.firebasestorage.app",
  messagingSenderId: "886547356009",
  appId: "1:886547356009:web:3d3a6c46caae49792285f8",
  measurementId: "G-KGSY6TC4SK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
