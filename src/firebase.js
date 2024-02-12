import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCj_TFBLT0n3Y5t-lTDTsOQbPt9rhYEScU",
  authDomain: "guftgu-74d26.firebaseapp.com",
  projectId: "guftgu-74d26",
  storageBucket: "guftgu-74d26.appspot.com",
  messagingSenderId: "780649310200",
  appId: "1:780649310200:web:6fe472bedc15a38f9b580d"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };