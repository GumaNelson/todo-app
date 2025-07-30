// Replace with your Firebase project config
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyATqMqm5fqSd1a0AAxr8VyPbma31j22mWE",
  authDomain: "todo-flutter-app-48737.firebaseapp.com",
  projectId: "todo-flutter-app-48737",
  storageBucket: "todo-flutter-app-48737.firebasestorage.app",
  messagingSenderId: "730077409781",
  appId: "1:730077409781:web:0cb6fbf94a80c0026670bc",
  measurementId: "G-VN1WP9SWV4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);