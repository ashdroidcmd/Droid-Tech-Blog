// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDgDt1lL3vP5LeRFGzgtQD3Gu0cYTbRxrc",
    authDomain: "droid-tech-blog.firebaseapp.com",
    projectId: "droid-tech-blog",
    storageBucket: "droid-tech-blog.firebasestorage.app",
    messagingSenderId: "124588148557",
    appId: "1:124588148557:web:d51e13cdf62978cdb21904",
    measurementId: "G-5DB2S46ZYL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };