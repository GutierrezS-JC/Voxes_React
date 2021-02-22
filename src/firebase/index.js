import firebase from 'firebase/app';
import '@firebase/firestore'

const APIKEY = process.env.REACT_APP_FIREBASE_API_KEY;
const AUTHDOMAIN = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN;
const PROJECTID = process.env.REACT_APP_FIREBASE_PROJECT_ID;
const STORAGEBUCKET = process.env.REACT_APP_FIREBASE_STORAGE_BUCKET;
const MESSAGINGSENDERID = process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID;
const APPID = process.env.REACT_APP_FIREBASE_APP_ID;



const app = firebase.initializeApp({
    apiKey: APIKEY,
    authDomain: AUTHDOMAIN,
    projectId: PROJECTID,
    storageBucket: STORAGEBUCKET,
    messagingSenderId: MESSAGINGSENDERID,
    appId: APPID
});

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app)
}