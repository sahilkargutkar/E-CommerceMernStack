import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDXj0fGEQLSpX67fytB6kjOJuUbPsashBo",
    authDomain: "myapp-f9b41.firebaseapp.com",
    projectId: "myapp-f9b41",
    storageBucket: "myapp-f9b41.appspot.com",
    messagingSenderId: "572045528848",
    appId: "1:572045528848:web:00b39ccdc98fe1d31e5f95",
    measurementId: "G-XLGEFKP3QK"
  };
  
  const firebaseApp =firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth };