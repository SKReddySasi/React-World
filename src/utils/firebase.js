// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOGT0hHl1XgoPEFzp_m2Hw70wcPSk_5C8",
  authDomain: "sk-namastefood.firebaseapp.com",
  projectId: "sk-namastefood",
  storageBucket: "sk-namastefood.appspot.com",
  messagingSenderId: "551415586667",
  appId: "1:551415586667:web:51d7a15155d9887033762e",
  measurementId: "G-4SJMW11PVH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
