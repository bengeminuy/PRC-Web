import firebase from 'firebase';
import firestore from 'firebase/firestore';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDuTuMqQaPlHfVlBa_Q1Fx_Bkz8HQxeev0",
  authDomain: "redcrossph-c618f.firebaseapp.com",
  databaseURL: "https://redcrossph-c618f.firebaseio.com/",
  projectId: "redcrossph-c618f",
  storageBucket: "redcrossph-c618f.appspot.com",
  messagingSenderId: "814554254699"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore();