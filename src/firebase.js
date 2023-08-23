import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-authdomain",
  projectId: "your-projectId",
  storageBucket: "your-storageBucket",
  messagingSenderId: "your-messagingSenderId",
  appId: "your-appid"
};

export const app = initializeApp(firebaseConfig);