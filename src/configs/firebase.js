import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCPGM8QRYmsMwFCyVttHNZOpU4XvLfnMog",
    authDomain: "movie-app-112c8.firebaseapp.com",
    projectId: "movie-app-112c8",
    storageBucket: "movie-app-112c8.appspot.com",
    messagingSenderId: "1085181677271",
    appId: "1:1085181677271:web:4535422597166f4347ea92"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth }