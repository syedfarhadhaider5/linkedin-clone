// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAF2hyUax59U9XgDnRuaKCaksT1tfIiP-I",
    authDomain: "my-facebook-app-db8ca.firebaseapp.com",
    projectId: "my-facebook-app-db8ca",
    storageBucket: "my-facebook-app-db8ca.appspot.com",
    messagingSenderId: "902143194060",
    appId: "1:902143194060:web:8c719836c0ab11e6b46369",
    measurementId: "G-7WDNQ2BSDL"
  };
  const app = firebase.initializeApp(firebaseConfig)
  const db = app.firestore();
  const auth = firebase.auth();
  const provider =  new firebase.auth.GoogleAuthProvider() 
  const storage  = getStorage();
  export {auth, provider, storage,uploadBytes, ref, getDownloadURL }
  export default db