// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyChOvkKKAgR2ywgEYfeb8v3wAENFc6XOeg",
  authDomain: "netflix-clone-e6254.firebaseapp.com",
  projectId: "netflix-clone-e6254",
  storageBucket: "netflix-clone-e6254.firebasestorage.app",
  messagingSenderId: "965291538398",
  appId: "1:965291538398:web:72bf4efc7eab7b79d04f4f",
  measurementId: "G-ZHDT16BGDZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

export const signup = async(name , email , password) =>
{
try
{
    const res = await createUserWithEmailAndPassword(auth,email,password);
    const user = res.user;
    await addDoc(collection(db ,'user'),{
        uid:user.uid,
        name,
        authProvider:'local',
        email,
    });
}
catch(error)
{
    toast.error(error)
   
}
}


export const login = (email , password)=>
{
try
{
    signInWithEmailAndPassword(auth , email , password);
   
}
catch(error)
{
    toast.error(error)

}
}


export const logout = () =>
{
    signOut(auth)
   
}


