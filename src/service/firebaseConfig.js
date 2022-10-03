import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC-jLawnQJ7ovJpuM1nvMMor1ZJ-BEEKU0",
  authDomain: "userbook-54791.firebaseapp.com",
  projectId: "userbook-54791",
  storageBucket: "userbook-54791.appspot.com",
  messagingSenderId: "728283060054",
  appId: "1:728283060054:web:d2539dfd7278a873b368f7",
  measurementId: "G-D3M3RJTNE2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);