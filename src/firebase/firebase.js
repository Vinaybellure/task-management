import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCs-XHbUhR-83rRpqFlaA-z3Uy8kHWXdkE",
    authDomain: "task-management-a5742.firebaseapp.com",
    projectId: "task-management-a5742",
    storageBucket: "task-management-a5742.appspot.com",
    messagingSenderId: "218198371211",
    appId: "1:218198371211:web:21b3c0b2b36bc02ceddd8e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  const db = firebaseApp.firestore();

  export {auth, provider, db} 