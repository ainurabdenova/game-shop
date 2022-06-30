// нежелательно так делать. данные уязвимые.
// лучше ввывести занчение в отдельный файл .env.local и там хранить. и передать как process.env.CONST
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBJvYQd5oXSTOJ_nq3DlmkNFVHs0KxFXE4",
    authDomain: "auth-game-c5888.firebaseapp.com",
    projectId: "auth-game-c5888",
    storageBucket: "auth-game-c5888.appspot.com",
    messagingSenderId: "295041970734",
    appId: "1:295041970734:web:49afea4bd2ca9638f1a5bf"
};


const app = initializeApp(firebaseConfig);