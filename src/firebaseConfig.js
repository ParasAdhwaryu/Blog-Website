// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9-0YgcX-uKrrHw4c_03Q4dHB2YG409gg",
  authDomain: "blogs-59282.firebaseapp.com",
  projectId: "blogs-59282",
  storageBucket: "blogs-59282.appspot.com",
  messagingSenderId: "112834213084",
  appId: "1:112834213084:web:5ca9dabfd32901cde63019"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth=getAuth(app);