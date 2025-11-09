// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyAd34-F8A4FtwSTLnp6iY2g0gGd4XZU_7Y",
  authDomain: "app1-e7404.firebaseapp.com",
  projectId: "app1-e7404",
  storageBucket: "app1-e7404.firebasestorage.app",
  messagingSenderId: "329859674233",
  appId: "1:329859674233:web:0df9c28b7c9854e44c64a8",
  measurementId: "G-X0DT5T75WH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//getAuth
const auth=getAuth()


//signup function

export function mySignup(email, password){
    return createUserWithEmailAndPassword(auth,email,password)
}

//currentuser

export function useAuth(){
    const [current,setCurrent]=useState("")

    useEffect(()=>{
        let x=onAuthStateChanged(auth, user=>setCurrent(user))
        return x
    },[])
    return current
}


//Login 

export function mySignin(email, password){
    return signInWithEmailAndPassword(auth, email, password)
}

//SignOut

export function mySignout(email,password){
    return signOut(auth,email,password)
}