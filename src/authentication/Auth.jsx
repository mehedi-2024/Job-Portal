
import React, { createContext, useEffect, useState } from 'react'
import { auth } from './firebase.init'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import axios from 'axios';

export const AuthContext = createContext()

const Auth = ({ children }) => {

    const provider = new GoogleAuthProvider();
    const [hasUser, setHasUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const signupWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)

    }
    const signupWithPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signinWithPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signout = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setHasUser(user)
                setLoading(false)
                axios.post('https://job-portal-backend-ashy-seven.vercel.app/jwt', { email: user.email }, { withCredentials: true })
                    .then(res => console.log(res.data))
                    .then(err => console.log(err))
            } else {
                setHasUser(user)
                setLoading(false)
                axios.post('https://job-portal-backend-ashy-seven.vercel.app/logOut', {}, { withCredentials: true })
                    .then(res => console.log(res.data))
                    .then(err => console.log(err))
            }
        });

        return () => unsubscribe()
    }, [])


    const authValue = {
        signupWithGoogle,
        signupWithPassword,
        signinWithPassword,
        signout,
        hasUser,
        loading,
    }
    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    )
}

export default Auth