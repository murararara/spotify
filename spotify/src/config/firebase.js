// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/getAuth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrpf5dje8hdeGQ_eYqc3RIZmA_nSGg16o",
  authDomain: "playlists-e3fc8.firebaseapp.com",
  projectId: "playlists-e3fc8",
  storageBucket: "playlists-e3fc8.appspot.com",
  messagingSenderId: "614689043687",
  appId: "1:614689043687:web:a80bf4507a76a7d09c5e42",
  measurementId: "G-1D10ZBXYRK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);