import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyALQgQOO0dWeveUhF5AP9tX4FItlKLlv4s",
  authDomain: "muso-eldeeb.firebaseapp.com",
  projectId: "muso-eldeeb",
  storageBucket: "muso-eldeeb.appspot.com",
  messagingSenderId: "1075065620641",
  appId: "1:1075065620641:web:323c11de4c44f0c08bc8e0",
};
// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }