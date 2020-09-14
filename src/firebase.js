import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA6MdR5MilK0coBZFvBOiCFuER48XZuB2M",
    authDomain: "whats-app-clone-3fdf9.firebaseapp.com",
    databaseURL: "https://whats-app-clone-3fdf9.firebaseio.com",
    projectId: "whats-app-clone-3fdf9",
    storageBucket: "whats-app-clone-3fdf9.appspot.com",
    messagingSenderId: "619100790831",
    appId: "1:619100790831:web:146a7693fef7cd5be826da",
    measurementId: "G-BH6XVRX4EN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;