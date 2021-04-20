import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD0Gl2jKfQhyEtl44_YLJLIpUBXFp5aayg",
    authDomain: "crwn-db-66538.firebaseapp.com",
    projectId: "crwn-db-66538",
    storageBucket: "crwn-db-66538.appspot.com",
    messagingSenderId: "110222630775",
    appId: "1:110222630775:web:b840cb4c5d100dadc28b72",
    measurementId: "G-BTT75PCWJC"
  }

firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;