import firebase from "firebase";

export const firebaseConfig = {
   apiKey: "AIzaSyASZbaVOVqptC_JVQje22r69jDfP56GoGw",
   authDomain: "slack-clone-90365.firebaseapp.com",
   projectId: "slack-clone-90365",
   storageBucket: "slack-clone-90365.appspot.com",
   messagingSenderId: "446609609205",
   appId: "1:446609609205:web:9b1612f7e67d064dd750bc"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };