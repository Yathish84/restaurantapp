// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyAi9076FuGNv5fmfU5v5bkaE-Trt0Fu4EI",
  authDomain: "olveria-delicacy.firebaseapp.com",
  databaseURL: "https://olveria-delicacy.firebaseio.com",
  projectId: "olveria-delicacy",
  storageBucket: "olveria-delicacy.appspot.com",
  messagingSenderId: "787759806224",
  appId: "1:787759806224:web:1ba446da47d62423ae1795",
  measurementId: "G-16VQ2ZMTHR"
}; 

const firebaseapp = firebase.initializeApp(firebaseConfig);  
const db = firebaseapp.firestore()    // for initializing database
const auth = firebase.auth();

export  {db, auth};