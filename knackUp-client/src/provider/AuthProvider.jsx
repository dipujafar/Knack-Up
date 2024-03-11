/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
      if(currentUser){
        setUser(currentUser);
        setLoading(false);
      }
      else{
        setUser(null);
        setLoading(false)
      }
    })

    return ()=> {
      return unsubscribe();
    }
  },[])

  const userInfo = {
    user,
    loading,
    signUp,
    signIn
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
