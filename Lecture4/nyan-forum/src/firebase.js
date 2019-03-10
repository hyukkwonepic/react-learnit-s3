import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyAy1GjugKDk3ndYLw_QnFY6u01qZ0Sd8fc",
  authDomain: "nyan-forum-renew.firebaseapp.com",
  databaseURL: "https://nyan-forum-renew.firebaseio.com",
  projectId: "nyan-forum-renew",
  storageBucket: "nyan-forum-renew.appspot.com",
  messagingSenderId: "377906694335"
};
firebase.initializeApp(config);

const db = firebase.firestore();

export {
  db
};