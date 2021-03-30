import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyBYJdgDD2e0gotagVZwNHZsdCQbMSaX_rU",
  authDomain: "fir-4387f.firebaseapp.com",
  projectId: "fir-4387f",
  storageBucket: "fir-4387f.appspot.com",
  messagingSenderId: "875910317904",
  appId: "1:875910317904:web:31519f462b85f6dd238e55",
};
 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();
 const auth = firebase.auth();
 const provider = new firebase.auth.GoogleAuthProvider();
 export { auth, provider };
 export default db;