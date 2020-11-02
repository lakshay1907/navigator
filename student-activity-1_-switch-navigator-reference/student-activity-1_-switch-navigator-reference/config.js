import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBY0bp6reSvceBiyIvqYMNbJvWVRFSlqNE",
    authDomain: "buzzer-app-bfa9b.firebaseapp.com",
    databaseURL: "https://buzzer-app-bfa9b.firebaseio.com",
    projectId: "buzzer-app-bfa9b",
    storageBucket: "buzzer-app-bfa9b.appspot.com",
    messagingSenderId: "156751306128",
    appId: "1:156751306128:web:d3fb25c295c497bc886715"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.database();