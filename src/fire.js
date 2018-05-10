import firebase from "firebase";


	var config = {
    apiKey: "AIzaSyAeuP1xa-GMNx_sSM10AioYCZvZu7CzMc4",
    authDomain: "acafeboise.firebaseapp.com",
    databaseURL: "https://acafeboise.firebaseio.com",
    projectId: "acafeboise",
    storageBucket: "acafeboise.appspot.com",
    messagingSenderId: "908311805859"
  };
  
  let fire = firebase.initializeApp(config);

  export default fire