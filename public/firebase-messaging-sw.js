importScripts('https://www.gstatic.com/firebasejs/7.17.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.2/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyAyuSHFsvt5zKQX7RthsgvHioQ53YL3Rns",
    authDomain: "expense-tracker-97e20.firebaseapp.com",
    databaseURL: "https://expense-tracker-97e20.firebaseio.com",
    projectId: "expense-tracker-97e20",
    storageBucket: "expense-tracker-97e20.appspot.com",
    messagingSenderId: "981138639183",
    appId: "1:981138639183:web:9ac1fc10d2cb756bf15d3a",
    measurementId: "G-MKSX6SQ2JL"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.messaging();