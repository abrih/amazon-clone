// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"; 

import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzNEdFeeT2RdWZWK1F5Q61IZPDB5PHN5s",
  authDomain: "clone-22796.firebaseapp.com",
  projectId: "clone-22796",
  storageBucket: "clone-22796.firebasestorage.app",
  messagingSenderId: "897790875500",
  appId: "1:897790875500:web:060e18028c59f1d265c549",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = app.firestore();









// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// compat = compatability make the firebase compatable with older versions
// The code imports necessary Firebase services for Authentication(getAuth) and Firestore(firestore).
// It then initializes Firebase using the configuration specific to your project.
//     It exports the Firebase Authentication (auth) and Firestore(db) instances for use in other parts of your application.