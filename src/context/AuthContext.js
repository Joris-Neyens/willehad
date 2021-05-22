import { createContext, useState, useEffect } from "react";
import localStorage from "localStorage";

const AuthContext = createContext({
    setToken: () => { },
    getToken: () => { }
});

export const AuthContextProvider = ({ children }) => {

    const setToken = (token) => {
        localStorage.setItem("auth", token)
    
    }
    const getToken = (key) => {
      const tokenString = localStorage.getItem(key);
      const token = JSON.parse(tokenString)
      return token
      };

    const context = {getToken, setToken}
    
    return (
      <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
    );
    
}

export default AuthContext