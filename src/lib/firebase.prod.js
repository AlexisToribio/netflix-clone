import Firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyD9jZQt-dAGTdUDrpIuso2h4YfuNU0koAY",
  authDomain: "netflix-clone-739c7.firebaseapp.com",
  projectId: "netflix-clone-739c7",
  storageBucket: "netflix-clone-739c7.appspot.com",
  messagingSenderId: "22198690562",
  appId: "1:22198690562:web:3674a323747fbaad1c581b",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
