import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyBMEGE2ADaifR2tVqorxORdN7Lkjejws7k",
    authDomain: "selected-topic-eb0d9.firebaseapp.com",
    projectId: "selected-topic-eb0d9",
    storageBucket: "selected-topic-eb0d9.appspot.com",
    messagingSenderId: "954265443337",
    appId: "1:954265443337:web:cbe42a791b1327a5492cd8",
    measurementId: "G-LCZMS1RMN8"
};
const fire = firebase.initializeApp(firebaseConfig)
export default fire;