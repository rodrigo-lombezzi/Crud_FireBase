import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAw3UfBOGlZZX82TB3Y5vbxwZV6KLyuEVg",
  authDomain: "todo-app-e2ade.firebaseapp.com",
  projectId: "todo-app-e2ade",
  storageBucket: "todo-app-e2ade.firebasestorage.app",
  messagingSenderId: "913751463222",
  appId: "1:913751463222:web:26cdb6c68abc722b140f97"
};


const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}