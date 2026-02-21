// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';

import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBMAe-lHvyczb4n6xxg4Ph3J0ujxQbx4IE",
  authDomain: "crwn-clothing-db-296b1.firebaseapp.com",
  projectId: "crwn-clothing-db-296b1",
  storageBucket: "crwn-clothing-db-296b1.firebasestorage.app",
  messagingSenderId: "447635269354",
  appId: "1:447635269354:web:2ea9866da607d13cee1993"
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
})
export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth,provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth,provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};


export const createAuthUserWithEmailAndPassword = async(email,password)=>{
  if(!email || !password) return;
  return createUserWithEmailAndPassword(auth,email,password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};