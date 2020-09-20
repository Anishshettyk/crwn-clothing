import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA6KA9s1kx_hYqll7IkLr5X95KFZzwaB3U",
  authDomain: "crwn-db-4cb4f.firebaseapp.com",
  databaseURL: "https://crwn-db-4cb4f.firebaseio.com",
  projectId: "crwn-db-4cb4f",
  storageBucket: "crwn-db-4cb4f.appspot.com",
  messagingSenderId: "246437386548",
  appId: "1:246437386548:web:f39f2e9003ef1df336ed61",
  measurementId: "G-EH66DXDV73",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//To get access to google auth provider from authentication library
const provider = new firebase.auth.GoogleAuthProvider();

//To trigger select_account(mail_id) popup when logging in
provider.setCustomParameters({ prompt: "select_account" });

export const signInwithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
