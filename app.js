// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCjp_ad5BnTLIUYOniQiohI5wjvpOjCvxI",
    authDomain: "dlsu-commforum.firebaseapp.com",
    projectId: "dlsu-commforum",
  storageBucket: "dlsu-commforum.appspot.com",
  messagingSenderId: "916592314587",
  appId: "1:916592314587:web:3897b93b4614b192ab64fe",
  measurementId: "G-V7199H23RM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);