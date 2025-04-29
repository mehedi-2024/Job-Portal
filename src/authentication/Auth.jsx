
import React, { createContext, useEffect, useState } from 'react'
import { auth } from './firebase.init'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext()

const Auth = ({ children }) => {

    const provider = new GoogleAuthProvider();
    const [hasUser, setHasUser] = useState(null)

    const signupWithGoogle = () => {
        return signInWithPopup(auth, provider)

    }
    const signupWithPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signinWithPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setHasUser(user)
        });

        return () => unsubscribe()
    }, [])

    const authValue = {
        signupWithGoogle,
        signupWithPassword,
        signinWithPassword,
        signout,
        hasUser
    }
    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    )
}

export default Auth