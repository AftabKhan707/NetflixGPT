// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNmx7cquVC9_pFf6WsJ7-wbtL13xoY8xY",
  authDomain: "newnetflix-a789c.firebaseapp.com",
  projectId: "newnetflix-a789c",
  storageBucket: "newnetflix-a789c.firebasestorage.app",
  messagingSenderId: "857220053820",
  appId: "1:857220053820:web:6e5500e78e2b7c9d1afc39",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
