import { createContext } from "react";
import localStorage from "localStorage";
import PropTypes from "prop-types";

const AuthContext = createContext({
    getToken: () => { }
});

export const AuthContextProvider = ({ children }) => {

    const getToken = (key) => {
      const tokenString = localStorage.getItem(key);
      const token = JSON.parse(tokenString)
      return token
      };

  const context = { getToken }
    
  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
    );
    
}

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default AuthContext