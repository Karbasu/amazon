import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6fENszLik6xe7MgU48S-J0P2m4_AueCo",
  authDomain: "clone-3af92.firebaseapp.com",
  projectId: "clone-3af92",
  storageBucket: "clone-3af92.appspot.com",
  messagingSenderId: "1023229835575",
  appId: "1:1023229835575:web:101ff2a64ae874b78042b2",
  measurementId: "G-5Q01QYV3GY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
