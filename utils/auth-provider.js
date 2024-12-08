import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth"
import { createContext, use, useContext, useEffect, useState } from "react";
import { auth } from "./firebase-config.js"

const AuthContext = createContext()

const googleProvider = new GoogleAuthProvider()

export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)

    const googleSignIn = () => {
        const result = signInWithPopup(auth, googleProvider)
        setUser(result.user)
        // const credential = googleProvider.credentialFromResult(auth, result)
        // setToken(credential.accessToken)
    }

    const googleSignOut = () => {
        signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return () => unsubscribe()
    }, [user])

    return(
        <AuthContext.Provider value={{user, googleSignIn, googleSignOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}