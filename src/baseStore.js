import firebase from 'firebase/app'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAV_mweDBO4MeVM6bijMKSKmeuu2gUcK_Q",
    authDomain: "noum-storage.firebaseapp.com",
    projectId: "noum-storage",
    storageBucket: "noum-storage.appspot.com",
    messagingSenderId: "474980997255",
    appId: "1:474980997255:web:372ef2227f07c9d2644022"
};

export const noumStore = firebase.initializeApp(firebaseConfig)