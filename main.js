document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVWU6pbQoioIWqUUcMWX0GaIr-x_tKcOI",
  authDomain: "trabajo-de-edna.firebaseapp.com",
  projectId: "trabajo-de-edna",
  storageBucket: "trabajo-de-edna.appspot.com",
  messagingSenderId: "572331719844",
  appId: "1:572331719844:web:3ac39a8e051bf56bdcfa31",
  measurementId: "G-YME64PM7EL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);