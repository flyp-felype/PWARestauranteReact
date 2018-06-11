import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA3_J-zgYMD8Y63vDLSNVwSj0NQOMFvVJk",
    authDomain: "restaurant-a454f.firebaseapp.com",
    databaseURL: "https://restaurant-a454f.firebaseio.com",
    projectId: "restaurant-a454f",
    storageBucket: "",
    messagingSenderId: "922584690475"
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();