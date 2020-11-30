import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCny_9xuDAiPPsu0BnFDndRmShEmqe1fQI",
    authDomain: "colecionaveisfb-325c1.firebaseapp.com",
    databaseURL: "https://colecionaveisfb-325c1.firebaseio.com",
    projectId: "colecionaveisfb-325c1",
    storageBucket: "colecionaveisfb-325c1.appspot.com",
    messagingSenderId: "509735563022",
    appId: "1:509735563022:web:ff01b8bfe958e3bf02315f",
    measurementId: "G-SJWHBXK0B9"
  };

var app = firebase.initializeApp(firebaseConfig);

export const conexaoFS = app.firestore();