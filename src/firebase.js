import firebase from "firebase/app";

import "firebase/firebase-auth"; //auth
import "firebase/database"; //database
import "firebase/storage"; //storing images

const firebaseConfig = {
  apiKey: "AIzaSyAPka9bqGC6g9QEnK6bIs4x1KXD-ih4KsY",
  authDomain: "prime-with-react.firebaseapp.com",
  databaseURL: "https://prime-with-react.firebaseio.com",
  projectId: "prime-with-react",
  storageBucket: "prime-with-react.appspot.com",
  messagingSenderId: "967688980796",
  appId: "1:967688980796:web:e949677fb3d71002307639",
};

firebase.initializeApp(firebaseConfig); //firebase init
export default firebase;