import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyA0EpqFtK0FOsc5STVJJq1_5zBaIZ19BpI",
    authDomain: "mern-shop-6608b.firebaseapp.com",
    projectId: "mern-shop-6608b",
    storageBucket: "mern-shop-6608b.appspot.com",
    messagingSenderId: "1047870183969",
    appId: "1:1047870183969:web:33c45b64a096d67727a160"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { auth };
export default db;