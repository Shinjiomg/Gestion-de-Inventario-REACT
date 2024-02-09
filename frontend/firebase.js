import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth, browserLocalPersistence, setPersistence } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyDFAhvp0q3N8pv0hpB7l4iS2_0-As0QPGQ",
    authDomain: "sistema-de-inventario-7d186.firebaseapp.com",
    databaseURL: "https://sistema-de-inventario-7d186-default-rtdb.firebaseio.com",
    projectId: "sistema-de-inventario-7d186",
    storageBucket: "sistema-de-inventario-7d186.appspot.com",
    messagingSenderId: "648915339926",
    appId: "1:648915339926:web:6400a657b07009762510b7",
    measurementId: "G-B1NFMBW57Y"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence)
export { app, analytics, auth };


