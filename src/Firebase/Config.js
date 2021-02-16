import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAq5zFrHz0lSjTiE1U43XEnaiR-D4I8sjY",
    authDomain: "fir-c232b.firebaseapp.com",
    projectId: "fir-c232b",
    storageBucket: "fir-c232b.appspot.com",
    messagingSenderId: "84116374184",
    appId: "1:84116374184:web:81f8d8c9f3be0781dd389d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  export {projectStorage, projectFirestore, timestamp};
