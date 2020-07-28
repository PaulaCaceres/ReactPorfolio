import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyD7FQPkdxH7hKowCogwdhgHGt9-YBtT9TU",
  authDomain: "react-portfolio-57f4f.firebaseapp.com",
  databaseURL: "https://react-portfolio-57f4f.firebaseio.com",
  projectId: "react-portfolio-57f4f",
  storageBucket: "react-portfolio-57f4f.appspot.com",
  messagingSenderId: "345988180062",
  appId: "1:345988180062:web:50750bab96eb9292526ccf"
};

var firebaseApp = firebase.initializeApp(firebaseConfig);
var firebaseDB = firebaseApp.database().ref();
var firebaseRef = firebaseApp.database();
var firebaseStorage = firebaseApp.storage().ref(`/pictures`)

export { firebaseDB, firebaseRef, firebaseStorage };
