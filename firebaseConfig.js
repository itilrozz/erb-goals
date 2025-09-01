
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdZN2lJJDbiQfM09cwEmpN4VlowFmQTAg",
  authDomain: "erb-goals.firebaseapp.com",
  projectId: "erb-goals",
  storageBucket: "erb-goals.firebasestorage.app",
  messagingSenderId: "651626462935",
  appId: "1:651626462935:web:3d25b226d8a66eadebba92"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)