import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjFa3LAGTwEZiIxbmyQIlh9O2EPI5JDL0",
  authDomain: "myecom-2dc18.firebaseapp.com",
  projectId: "myecom-2dc18",
  storageBucket: "myecom-2dc18.appspot.com",
  messagingSenderId: "628026770790",
  appId: "1:628026770790:web:1875bf435d60d8384174a7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
