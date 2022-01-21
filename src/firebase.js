import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDgkvh75GGJYZvLU7A7zVFw9cMsHeGPTDo",
    authDomain: "blabber-b7a4d.firebaseapp.com",
    projectId: "blabber-b7a4d",
    storageBucket: "blabber-b7a4d.appspot.com",
    messagingSenderId: "512031057968",
    appId: "1:512031057968:web:cc7c10d5f1671b8af225f5",
    measurementId: "G-YK9KL28L52"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;