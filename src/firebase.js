// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVCYqfMk_P2tvn_EJaKeDe8I2ud_mQC7Y",
  authDomain: "admin-app-1e059.firebaseapp.com",
  projectId: "admin-app-1e059",
  storageBucket: "admin-app-1e059.appspot.com",
  messagingSenderId: "980264386938",
  appId: "1:980264386938:web:d76717c9034364a05496c3",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
