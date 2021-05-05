import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB6wqz5TAjhF6_vi1y46H3kvoSSK4eu7KM",
    authDomain: "slack-clone-dbb96.firebaseapp.com",
    projectId: "slack-clone-dbb96",
    storageBucket: "slack-clone-dbb96.appspot.com",
    messagingSenderId: "486736583228",
    appId: "1:486736583228:web:c3709cfc214f258d9d8139",
    measurementId: "G-1MZ0LM17RS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };