// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKLHwt0nAQMGVuK_ZHoQ9P4d9dkUuW1gw",
    authDomain: "red-onion-hotel.firebaseapp.com",
    projectId: "red-onion-hotel",
    storageBucket: "red-onion-hotel.appspot.com",
    messagingSenderId: "913846090319",
    appId: "1:913846090319:web:362500198f98ce924c883a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
