import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-c5409.firebaseapp.com",
  projectId: "interviewiq-c5409",
  storageBucket: "interviewiq-c5409.firebasestorage.app",
  messagingSenderId: "748537500790",
  appId: "1:748537500790:web:52f6a8027e6f79540fbb57"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth,provider}