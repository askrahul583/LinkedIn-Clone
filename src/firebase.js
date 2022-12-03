import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqhfNtTgZ0XCPPn3QhVTRFFDDIIt-yG9g",
  authDomain: "linkedin-clone-d1ef4.firebaseapp.com",
  projectId: "linkedin-clone-d1ef4",
  storageBucket: "linkedin-clone-d1ef4.appspot.com",
  messagingSenderId: "28381619388",
  appId: "1:28381619388:web:ecee57b06a884386ecdcb9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();
export const db = firebaseApp.firestore();
