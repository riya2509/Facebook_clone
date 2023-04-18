// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmjd2wW4ObKn07m31gg-7h9qqkbH-ePOA",
  authDomain: "facebook-clone-43d6c.firebaseapp.com",
  projectId: "facebook-clone-43d6c",
  storageBucket: "facebook-clone-43d6c.appspot.com",
  messagingSenderId: "586245572434",
  appId: "1:586245572434:web:34948797873f96a9c71c8b",
  measurementId: "G-RSNT6K5PCV",
};

//To initialize the firebase app
const firebaseapp = firebase.initializeApp(firebaseConfig);
// For connecting to the database
const db = firebaseapp.firestore();

//Authentication
const auth = firebase.auth();
//Telling the provider that we want Google login service
const provider = new firebase.auth.GoogleAuthProvider();

//Explicit export
export { auth, provider };
//Default export
export default db;
