import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDSmRA6CXD0eTXHoYWzNbU9RF-11o6r1zc",
    authDomain: "unichat-f2e15.firebaseapp.com",
    projectId: "unichat-f2e15",
    storageBucket: "unichat-f2e15.appspot.com",
    messagingSenderId: "699372232919",
    appId: "1:699372232919:web:be166f7c48e299a414d092"
  }).auth();