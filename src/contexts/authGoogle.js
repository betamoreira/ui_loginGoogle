import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../service/firebaseConfig';

const provider = new GoogleAuthProvider();

export const AuthGoogleContext = createContext({});

export const AuthGoogleProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);

    useEffect(()=>{
        const loadStorageAuth = () => {
            const sessionToken = sessionStorage.getItem("@AuthFirebase:token");
            const sessionUser = sessionStorage.getItem("@AuthFirebase:user");
            if(sessionToken && sessionUser){
                setUser(sessionUser);
            }
        }
        loadStorageAuth();
    },[])

    const signInGoogle = () =>{
        signInWithPopup(auth, provider)
          .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(user);
            setUser(user);
            sessionStorage.setItem("@AuthFirebase:token", token);
            sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user));
          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(errorCode,errorMessage,email,credential);
          });
    };

    return (
        <AuthGoogleContext.Provider
        value={{ signInGoogle, signed: !!user, user }}
        >{children}</AuthGoogleContext.Provider>
    )
  
  }