import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDoYqADEQUzXcsEcv4AvDmw1wgf5AfgH8s",
    authDomain: "chat-app-192e2.firebaseapp.com",
    projectId: "chat-app-192e2",
    storageBucket: "chat-app-192e2.appspot.com",
    messagingSenderId: "848428619160",
    appId: "1:848428619160:web:ccf91c7ecc417a55d587ed"
};

export const app = initializeApp(firebaseConfig);