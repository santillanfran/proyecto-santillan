import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBzrz9Y6QnXBV6E-eM8f0hD0WsQfiICmSo",
  authDomain: "proyecto-santillan.firebaseapp.com",
  projectId: "proyecto-santillan",
  storageBucket: "proyecto-santillan.appspot.com",
  messagingSenderId: "838941978636",
  appId: "1:838941978636:web:be786d8d5bf73e62efbe29"
};


const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

export default firestoreDB;