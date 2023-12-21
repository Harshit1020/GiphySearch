// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "giphyapp-a1287.firebaseapp.com",
  projectId: "giphyapp-a1287",
  storageBucket: "giphyapp-a1287.appspot.com",
  messagingSenderId: "860885924001",
  appId: "1:860885924001:web:4ca0984bc258e42d07d8e0",
  measurementId: "G-5VQVE4DXEX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the authentication service
export const auth = getAuth(app);

// Export other services if needed
// export const firestore = getFirestore(app);

export default app;
