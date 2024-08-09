import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbuqWntArYnXtCfo37AX9lCtYUUivGsaI",
  authDomain: "referlink-3f76b.firebaseapp.com",
  projectId: "referlink-3f76b",
  storageBucket: "referlink-3f76b.appspot.com",
  messagingSenderId: "549257458132",
  appId: "1:549257458132:web:44571f5729c0f9afd06641",
  measurementId: "G-WVZLHSK3SV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);