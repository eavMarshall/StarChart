import {createApp} from 'vue'
import App from './App.vue'
import {initializeApp} from 'firebase/app';
import { getAuth, signInWithRedirect, GoogleAuthProvider, getRedirectResult } from "firebase/auth";
import login from "./state/login";
import config from "./config";
import firebaseConnection from './state/firebaseConnection';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const app = initializeApp(config.firebaseConfig);
firebaseConnection.setFireBaseApp(app);
const provider = new GoogleAuthProvider();
const auth = getAuth()
const results = getRedirectResult(auth);

const signIn = () => signInWithRedirect(auth, provider);

if (results) {
    results.then(result => {
        if (result && result.user) {
            login.setIsLoggedIn(true);
            login.setUser(result.user);
        } else {
            signIn();
        }
    });
} else {
    signIn();
}

createApp(App).mount('#app');