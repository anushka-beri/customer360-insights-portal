import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCY42m-W0Aw_plg0XLPDGCm4mx2_8OXnP0",
  authDomain: "hcl-hackathon-eab69.firebaseapp.com",
  projectId: "hcl-hackathon-eab69",
  storageBucket: "hcl-hackathon-eab69.firebasestorage.app",
  messagingSenderId: "551417354629",
  appId: "1:551417354629:web:daf64963626ac7c50accec",
  measurementId: "G-VMVTB41B58"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
