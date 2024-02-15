import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext();

const Auth = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loginUserFromStorage = JSON.parse(localStorage.getItem("LoginUser"));
    // console.log("login user from storage:", loginUserFromStorage);
    const SignupUserFromStorage = JSON.parse(
      localStorage.getItem("SignupUser")
    );

    if (loginUserFromStorage || SignupUserFromStorage) {
      setUser(loginUserFromStorage || SignupUserFromStorage);
      // console.log("user value in auth.jsx (inside if):", loginUserFromStorage);
    } else {
      setUser(null);
      // console.log("user value in auth.jsx (inside else):", user);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export default Auth;
