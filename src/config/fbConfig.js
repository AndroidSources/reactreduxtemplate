import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
    apiKey: "AIzaSyDxi3Tuo-udo4nhENNDyJvJCZeedgbHT1A",
    authDomain: "todoapp-ef5bc.firebaseapp.com",
    databaseURL: "https://todoapp-ef5bc.firebaseio.com",
    projectId: "todoapp-ef5bc",
    storageBucket: "todoapp-ef5bc.appspot.com",
    messagingSenderId: "255697008350",
    appId: "1:255697008350:web:17f91fd4e55740a4"
};
firebase.initializeApp(config);

export default firebase