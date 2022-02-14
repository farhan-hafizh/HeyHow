// Import the functions you need from the SDKs you needport 
import {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const FirebaseConfig = {
    apiKey: "AIzaSyDm04cdZ111yBD8MIpokfjMRnBUl8lMH2E",
    authDomain: "heyhow-f763c.firebaseapp.com",
    projectId: "heyhow-f763c",
    storageBucket: "heyhow-f763c.appspot.com",
    messagingSenderId: "112483959075",
    appId: "1:112483959075:web:f1d2086d12eb2128c04c96",
    measurementId: "G-VNE04MGEX6"
};
const app=initializeApp(FirebaseConfig)

// Initialize Firebase
export default app;