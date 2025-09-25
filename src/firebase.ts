// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQrN8Y6tIrXcJvZyTLmLilz1Gs2ZEKW9s",
  authDomain: "erika-website-c5d6a.firebaseapp.com",
  projectId: "erika-website-c5d6a",
  storageBucket: "erika-website-c5d6a.firebasestorage.app",
  messagingSenderId: "914877650590",
  appId: "1:914877650590:web:9da36dbdecaae4ae85cd8f",
  measurementId: "G-E1GVYJ80QT"
};
// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar Auth
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export { app };