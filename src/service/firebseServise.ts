import firebase from 'firebase'

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

firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging()

export function GetToken() {
    Notification.requestPermission().then((permission) => {
        console.log(permission)
        if (permission === "granted") {
            messaging.getToken().then((token) => {
                console.log("TOKEN: ", token)
            }).catch((err) => {
                console.log(err)
            })
        }
    })
}