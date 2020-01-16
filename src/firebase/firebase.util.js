import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB5tWJRQSz58u3otJ8MxRKmRA54LtGJHig",
  authDomain: "crwn-db-df58a.firebaseapp.com",
  databaseURL: "https://crwn-db-df58a.firebaseio.com",
  projectId: "crwn-db-df58a",
  storageBucket: "crwn-db-df58a.appspot.com",
  messagingSenderId: "907416147154",
  appId: "1:907416147154:web:2da62d2c036316d60d090b"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
