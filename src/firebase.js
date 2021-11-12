import { initializeApp } from "@firebase/app";
import { GoogleAuthProvider, getAuth } from '@firebase/auth'
import { getStorage } from '@firebase/storage'
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA5dRkvLZT9RWOett-HHq_4FITQZJonVfg",
    authDomain: "kuldeeps-disney-plus-clone.firebaseapp.com",
    projectId: "kuldeeps-disney-plus-clone",
    storageBucket: "kuldeeps-disney-plus-clone.appspot.com",
    messagingSenderId: "479171344327",
    appId: "1:479171344327:web:e1a01dea68c2db2468cbe2"
};

initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage };
export default db;
