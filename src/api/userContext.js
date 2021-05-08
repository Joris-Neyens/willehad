import React from "react";

const userContext = React.createContext([null, () => {}]);

export const UserProvider = (props) => {
  const [user, setUser] = localStorage("user", null);
  return (
    <AuthContext.Provider value={[user, setUser]}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default userContext;
