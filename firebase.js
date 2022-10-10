// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJ36AmRMmKnaWzolgw5ez1XSG4dsDhv9A",
  authDomain: "insta-clone-b72a4.firebaseapp.com",
  projectId: "insta-clone-b72a4",
  storageBucket: "insta-clone-b72a4.appspot.com",
  messagingSenderId: "488779808203",
  appId: "1:488779808203:web:3c683a14629c09146a8a4e",
  measurementId: "G-P3Q0XV17SS",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps();
const db = getFirestore();
const storage = getStorage();
// const analytics = getAnalytics(app);

export { app, db, storage };
