import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCCkFFElAsSzUzkB0o9weIx4UJG99Fz-g",
  authDomain: "scissors-project-5cdda.firebaseapp.com",
  projectId: "scissors-project-5cdda",
  storageBucket: "scissors-project-5cdda.appspot.com",
  messagingSenderId: "8132410907",
  appId: "1:8132410907:web:601705f6a5fccb628d02be",
  measurementId: "G-2HLSQQ8R2B"
};

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  
  export { db, analytics, auth };
  