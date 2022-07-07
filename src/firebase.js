import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdd3wXUoeKMbdJvv36DpEuQFT7rnhbR8E",
  authDomain: "todooo-d0c08.firebaseapp.com",
  databaseURL: "https://todooo-d0c08-default-rtdb.firebaseio.com",
  projectId: "todooo-d0c08",
  storageBucket: "todooo-d0c08.appspot.com",
  messagingSenderId: "222703789638",
  appId: "1:222703789638:web:f0253b931693c3baa10c47"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
