import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBnSJtYTg3kfXC5mCx8nZGTYwGdhdMIq6U",
  authDomain: "ethnicityvn.firebaseapp.com",
  projectId: "ethnicityvn",
  storageBucket: "ethnicityvn.appspot.com",
  messagingSenderId: "1019016524204",
  appId: "1:1019016524204:web:c7d0b59f01f7497609ca09",
  measurementId: "G-L864PFCST1",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
