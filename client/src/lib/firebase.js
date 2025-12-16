import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgV63iNd_jGmmpD-_J9k8-BGknq75Elh8",
  authDomain: "zappyweb-a4c85.firebaseapp.com",
  projectId: "zappyweb-a4c85",
  storageBucket: "zappyweb-a4c85.appspot.com",
  messagingSenderId: "696705091050",
  appId: "1:696705091050:web:9c61a0796543c6144b9e93",
  measurementId: "G-2ED8VH7GFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
