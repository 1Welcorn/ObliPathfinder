import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ACTION REQUIRED: Replace with your app's Firebase project configuration.
// In your Vercel project settings, add these as Environment Variables.
// You can find these values in your Firebase project's settings page.
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: "obli-fluency-pathfinder",
  storageBucket: "obli-fluency-pathfinder.firebasestorage.app",
  messagingSenderId: "361914234340",
  appId: "1:361914234340:web:12a2f9d022d5bf0e4103f1",
  measurementId: "G-NTJ1CXRKKH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);