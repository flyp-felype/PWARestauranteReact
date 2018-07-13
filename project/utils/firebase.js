import firebase from 'firebase';

const config = {
    apiKey: "API-KEY",
    authDomain: "DOMAIN",
    databaseURL: "DATABASE",
    projectId: "PROJECTID",
    storageBucket: "",
    messagingSenderId: "MENSAGEM"
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();
