import app from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyADzgHjhu3nEghRNe4CTvkpWC_kDHG-jZ0",
  authDomain: "health-home-ad9ea.firebaseapp.com",
  databaseURL: "https://health-home-ad9ea.firebaseio.com",
  projectId: "health-home-ad9ea",
  storageBucket: "health-home-ad9ea.appspot.com",
  messagingSenderId: "109990779056",
  appId: "1:109990779056:web:37726955612514f572c375",
};
// Initialize Firebase
app.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();

export { db, auth };
