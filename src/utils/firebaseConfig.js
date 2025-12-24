import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9bDlg97PQQcTEVg92QjeocP-P6rZhh0o",
  authDomain: "netflix-gpt-3192d.firebaseapp.com",
  projectId: "netflix-gpt-3192d",
  storageBucket: "netflix-gpt-3192d.firebasestorage.app",
  messagingSenderId: "101610654444",
  appId: "1:101610654444:web:ab9ba228f447de01aef3c9",
  measurementId: "G-5DX1M6T2T1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();