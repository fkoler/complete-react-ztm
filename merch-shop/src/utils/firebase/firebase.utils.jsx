import { initializeApp } from 'firebase/app';
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyArPY9yqk4LvgR0CpehXtyCDV0QElsuDGk",
    authDomain: "merch-shop-db.firebaseapp.com",
    projectId: "merch-shop-db",
    storageBucket: "merch-shop-db.appspot.com",
    messagingSenderId: "849042124800",
    appId: "1:849042124800:web:1e6277cb08754d2b03e8e5"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => {
    signInWithPopup(auth, provider);
};
