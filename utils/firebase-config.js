// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMeDaGqIcBPrLCbDqr0Ibc0YZAmjOnUw8",
  authDomain: "churchflow-256.firebaseapp.com",
  projectId: "churchflow-256",
  storageBucket: "churchflow-256.firebasestorage.app",
  messagingSenderId: "808079220984",
  appId: "1:808079220984:web:b2fbd10142a8f995715b0d",
  measurementId: "G-TWS2MC5WDL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)  // A Firebase App is a container-like object that stores common configuration and shares authentication across Firebase services.

// Initialize Firebase Auth and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db, auth };