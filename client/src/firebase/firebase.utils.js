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

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((object) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, object);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  //to set the key of collections to collection title
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {}); //starting with empty object
};

//initializing firebase from config object
firebase.initializeApp(config);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//To get access to google auth provider from authentication library
export const googleProvider = new firebase.auth.GoogleAuthProvider();

//To trigger select_account(mail_id) popup when logging in
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInwithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
