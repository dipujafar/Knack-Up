// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQdFf4cVd-_b-Ce6R2GA19n9jrp9ZZEEc",
  authDomain: "knack-up.firebaseapp.com",
  projectId: "knack-up",
  storageBucket: "knack-up.appspot.com",
  messagingSenderId: "649744972088",
  appId: "1:649744972088:web:5de3078d12deffb26ea9cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);