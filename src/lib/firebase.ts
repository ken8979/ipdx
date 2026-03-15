import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBR35untTEtJe77thpH8g5WzgaqUADNRxE",
  authDomain: "ipdx-a5330.firebaseapp.com",
  projectId: "ipdx-a5330",
  storageBucket: "ipdx-a5330.firebasestorage.app",
  messagingSenderId: "737946767589",
  appId: "1:737946767589:web:a4c8e4d135721bcd70840c",
  measurementId: "G-M4DSESD2TG"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

// Analytics はクライアントサイドのみで初期化
export const initAnalytics = async () => {
  if (typeof window !== "undefined") {
    const supported = await isSupported();
    if (supported) {
      return getAnalytics(app);
    }
  }
  return null;
};

export { app, db };
