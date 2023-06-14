import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB3wTVRBR2NxOcPRnpsF2Wj8AklN-vF7ww",
    authDomain: "fir-a2ab2.firebaseapp.com",
    projectId: "fir-a2ab2",
    storageBucket: "fir-a2ab2.appspot.com",
    messagingSenderId: "52457439266",
    appId: "1:52457439266:web:f79763a725f4f02c888a7b",
    measurementId: "G-1YT1DS0E9Z"
  };

  export default  firebase.initializeApp(firebaseConfig)