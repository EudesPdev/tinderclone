import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDiHEF8d2O5NjmQZOzYDgl8-PDYMX0dgDg",
    authDomain: "tinder-eudes-clone.firebaseapp.com",
    projectId: "tinder-eudes-clone",
    storageBucket: "tinder-eudes-clone.appspot.com",
    messagingSenderId: "1013792860872",
    appId: "1:1013792860872:web:57945367f8fc435d4813fd",
    measurementId: "G-XGR3YMPE69"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const database = firebaseApp.firestore();

  export default database;