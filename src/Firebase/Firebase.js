// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB88R9Dq40BKaWqK8Ry1YoOAQa6BtAkDGA",
    authDomain: "react-auth-bc411.firebaseapp.com",
    projectId: "react-auth-bc411",
    storageBucket: "react-auth-bc411.appspot.com",
    messagingSenderId: "1022995172253",
    appId: "1:1022995172253:web:8a37e3afd93bd6a4427d74",
    measurementId: "G-BGGJQZPS38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export {
    auth
}