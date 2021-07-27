
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAjge6QwhEhYS8uEu8gf7VcZdaY0gRLJgo",
    authDomain: "clone-42eeb.firebaseapp.com",
    projectId: "clone-42eeb",
    storageBucket: "clone-42eeb.appspot.com",
    messagingSenderId: "193574614273",
    appId: "1:193574614273:web:d9a2e0938a9d0ab29e9700",
    measurementId: "G-6796BX8HYV"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };