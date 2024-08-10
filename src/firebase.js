// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7shcPKsR9DvyvztNapzRKYhCkHyAqDxI",
  authDomain: "ardire-2aec8.firebaseapp.com",
  projectId: "ardire-2aec8",
  storageBucket: "ardire-2aec8.appspot.com",
  messagingSenderId: "763372948677",
  appId: "1:763372948677:web:ea63a15bcaf931fdff74ac",
  measurementId: "G-27C81VVQX5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);