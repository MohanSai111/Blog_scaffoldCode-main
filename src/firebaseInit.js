// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo-AUJrxoQZmNAomiCWSHrr4fkjj2pWzc",
  authDomain: "blogging-app-aecb5.firebaseapp.com",
  projectId: "blogging-app-aecb5",
  storageBucket: "blogging-app-aecb5.firebasestorage.app",
  messagingSenderId: "1027464321256",
  appId: "1:1027464321256:web:ca95dad41f191260f3115d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);