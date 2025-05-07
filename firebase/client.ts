// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:"AIzaSyCgJSrSRH5w3dACA0zmYS_wHBcKP1JYrlA",
  authDomain:"jsm-mock-interview.firebaseapp.com",
  projectId:  "jsm-mock-interview",
  storageBucket: "jsm-mock-interview.firebasestorage.app",
  messagingSenderId:  "296532524269",
  appId: "1:296532524269:web:85ff5e33b5558d916160e4",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);