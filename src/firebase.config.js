// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYYz3NaAn9O_zm5UxolboDQLcjvFharL4",
  authDomain: "house-market-app-8169f.firebaseapp.com",
  projectId: "house-market-app-8169f",
  storageBucket: "house-market-app-8169f.appspot.com",
  messagingSenderId: "588406234199",
  appId: "1:588406234199:web:ccbcf8e59dbd50af7e9712"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()