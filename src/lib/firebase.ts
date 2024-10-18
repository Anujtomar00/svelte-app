import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0Dwgg9CM0kbUxrWttoYFdmM9j4fh0y24",
  authDomain: "svelte-capacitor.firebaseapp.com",
  projectId: "svelte-capacitor",
  storageBucket: "svelte-capacitor.appspot.com",
  messagingSenderId: "887266635046",
  appId: "1:887266635046:web:8efad018f1e21dec3ca5e7",
  //   measurementId: "G-BRLCX0PTXE"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
