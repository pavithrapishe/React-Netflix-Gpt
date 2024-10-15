// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCYib4cVZ7FwcG2xqepIGiLi7DLFDcdlBo",
    authDomain: "netflixgpt-b418f.firebaseapp.com",
    projectId: "netflixgpt-b418f",
    storageBucket: "netflixgpt-b418f.appspot.com",
    messagingSenderId: "507145165194",
    appId: "1:507145165194:web:3f79e8202b240ec87e1073",
    measurementId: "G-BJMN4FZJHX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();