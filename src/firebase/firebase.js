import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCV2chDXCqLrbAdkmZrbZyBkJj8LUNFxg0',
  authDomain: 'mern-stack-ecommerce-72150.firebaseapp.com',
  projectId: 'mern-stack-ecommerce-72150',
  storageBucket: 'mern-stack-ecommerce-72150.appspot.com',
  messagingSenderId: '495691112970',
  appId: '1:495691112970:web:bc2ad7571ac5a69dbd75f3',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


//export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();