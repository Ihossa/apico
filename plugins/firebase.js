import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBB22izwFF3IxzmvTp62iZxXLdoGOt9Ops",
  authDomain: "apico-47941.firebaseapp.com",
  databaseURL: "https://apico-47941.firebaseio.com",
  projectId: "apico-47941",
  storageBucket: "apico-47941.appspot.com",
  messagingSenderId: "550567445034",
  appId: "1:550567445034:web:b4cc91787fc1245fd27953",
  measurementId: "G-EDL88LYKKD"
};
  // Initialize Firebase
  let app = null;
  console.log(firebase.apps.length);
  if(!firebase.app.length){
    app = firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase