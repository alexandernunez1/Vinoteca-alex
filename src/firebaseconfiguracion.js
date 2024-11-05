import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwbLCzTs7qeKR6E4IxixtJmzjHOpbYVL8",
  authDomain: "backend-vinoteca.firebaseapp.com",
  projectId: "backend-vinoteca",
  storageBucket: "backend-vinoteca.firebasestorage.app",
  messagingSenderId: "958341793799",
  appId: "1:958341793799:web:6c709221a77204337082a2",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
