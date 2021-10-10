import React, { useState, useEffect } from "react";
import firebase from 'firebase'

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [uid, setuid] = useState();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authenticated) => {
        setuid(authenticated.uid)
      });
  }, []);

  return <UserContext.Provider value={uid}>{children}</UserContext.Provider>;
};

// export default {UserContext,UserProvider}