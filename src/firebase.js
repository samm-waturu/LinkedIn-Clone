// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCSOXdbPfEBp_lnNbROpndM4MRxpCbEqA4",
    authDomain: "clonebuild-1.firebaseapp.com",
    projectId: "clonebuild-1",
    storageBucket: "clonebuild-1.appspot.com",
    messagingSenderId: "809549656611",
    appId: "1:809549656611:web:81be3ef5f2a540cb013796",
    measurementId: "G-DDCYBBCNSL"
};

const firebaseApp  = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

const auth = firebase.auth();

export  {db, auth};