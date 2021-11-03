import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCg0mnZu20rMDK8_WXWFVTtF_tKQsze5pQ",
  authDomain: "kalyan-portfolio.firebaseapp.com",
  projectId: "kalyan-portfolio",
  storageBucket: "kalyan-portfolio.appspot.com",
  messagingSenderId: "910716121224",
  appId: "1:910716121224:web:0df737f2bb885d93442f3d",
  measurementId: "G-B09Q0MC5WG",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
export default storage;
