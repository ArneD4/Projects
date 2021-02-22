 import firebase from 'firebase'
 
 var firebaseConfig = {
    apiKey: "AIzaSyDPINE7jVAlLkczVut3RSvhXDOaApcK36g",
    authDomain: "login-52ed4.firebaseapp.com",
    projectId: "login-52ed4",
    storageBucket: "login-52ed4.appspot.com",
    messagingSenderId: "874323027489",
    appId: "1:874323027489:web:070bb8b805e31903a26560"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;