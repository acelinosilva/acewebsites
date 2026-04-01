import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_c3zQMv-5fR0SAhzxlb42FYyY75TfiHM",
  authDomain: "aceweb-36eb2.firebaseapp.com",
  projectId: "aceweb-36eb2",
  storageBucket: "aceweb-36eb2.firebasestorage.app",
  messagingSenderId: "717994983202",
  appId: "1:717994983202:web:c75915ce8bc2bb8b5c6f7b",
  measurementId: "G-HSM5RMCPK4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics;
// Only initialize analytics in browser environment (SSR check if needed, though this is Vite/SPA)
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export { analytics };
export default app;
