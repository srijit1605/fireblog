import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNFDmIGKpZjFnxZPtHZKbojnWWJmdPgN8",
  authDomain: "fireblog-c4d0e.firebaseapp.com",
  projectId: "fireblog-c4d0e",
  storageBucket: "fireblog-c4d0e.appspot.com",
  messagingSenderId: "395247645698",
  appId: "1:395247645698:web:07a7411f951072829ce31b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();