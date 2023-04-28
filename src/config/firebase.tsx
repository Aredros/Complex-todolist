// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxzYdcy-I9ov79SwnIPg9zNaDnkxvIirM",
  authDomain: "todocheo-ef450.firebaseapp.com",
  projectId: "todocheo-ef450",
  storageBucket: "todocheo-ef450.appspot.com",
  messagingSenderId: "551284725708",
  appId: "1:551284725708:web:df138f770635a278bdaf69",
  measurementId: "G-L1FLC8N78G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
