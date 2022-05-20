// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyABpFXG2ln8OBZa1_JQ5bos72H6rwQ17fE",
    authDomain: "mydashllcassignment.firebaseapp.com",
    projectId: "mydashllcassignment",
    storageBucket: "mydashllcassignment.appspot.com",
    messagingSenderId: "991958171101",
    appId: "1:991958171101:web:c96dd6c38199f84ba7ca34",
    measurementId: "G-K5QNN4YVT8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);