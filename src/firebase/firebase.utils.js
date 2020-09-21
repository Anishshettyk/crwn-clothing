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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; //if user does not exist return from function
  //passing the userId to users collection as a id
  const userref = firestore.doc(`users/${userAuth.uid}`);
  //getting the data from the database about that particular user by the id
  const snapshot = await userref.get();

  //if the user's info is not stored in the database then store the data to it
  if (!snapshot.exists) {
    //getting the userr name and email
    const { displayName, email } = userAuth;
    //getting the date when it is created
    const createdAt = new Date();
    try {
      //settings the data for that user id in database
      await userref.set({ displayName, email, createdAt, ...additionalData });
      //if error logging back the error
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }
  //returning the data for furture user
  return userref;
};

//initializing firebase from config object
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//To get access to google auth provider from authentication library
const provider = new firebase.auth.GoogleAuthProvider();

//To trigger select_account(mail_id) popup when logging in
provider.setCustomParameters({ prompt: "select_account" });

export const signInwithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
