// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import Firebase Authentication if needed
import { getFirestore } from "firebase/firestore"; // Import Firestore if needed
import { getStorage } from "firebase/storage"; // Import Storage if needed

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkcNNLsxJSH7IGmammztH2TtpMMO7NsaE",
  authDomain: "jobbie-c50f7.firebaseapp.com",
  projectId: "jobbie-c50f7",
  storageBucket: "jobbie-c50f7.appspot.com", // Fix storageBucket URL
  messagingSenderId: "299053886554",
  appId: "1:299053886554:web:d8587e15d60bfde8eebc63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Firebase Authentication instance
const db = getFirestore(app); // Firestore database instance
const storage = getStorage(app); // Firebase Storage instance

// Export Firebase services
export { app, auth, db, storage };
