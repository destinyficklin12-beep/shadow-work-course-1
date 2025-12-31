// Firebase Configuration
// REPLACE WITH YOUR ACTUAL CONFIG FROM FIREBASE CONSOLE
const firebaseConfig = {
  apiKey: "AIzaSyDb1UXjiEUJX20EigX00IaKupWnVunYy6I",
  authDomain: "shadow-work-course.firebaseapp.com",
  projectId: "shadow-work-course",
  storageBucket: "shadow-work-course.firebasestorage.app",
  messagingSenderId: "1023145338538",
  appId: "1:1023145338538:web:e1c35722de8b7480fe92d3",
  measurementId: "G-QXCDKWYJP6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize services
const auth = firebase.auth();
const db = firebase.firestore();

console.log("✅ Firebase initialized successfully");
