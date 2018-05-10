import React from 'react';
import ReactDOM from 'react-dom';
import './homepage.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';
 
	// var config = {
 //    apiKey: "AIzaSyAeuP1xa-GMNx_sSM10AioYCZvZu7CzMc4",
 //    authDomain: "acafeboise.firebaseapp.com",
 //    databaseURL: "https://acafeboise.firebaseio.com",
 //    projectId: "acafeboise",
 //    storageBucket: "acafeboise.appspot.com",
 //    messagingSenderId: "908311805859"
 //  };
 //  firebase.initializeApp(config);


ReactDOM.render((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
