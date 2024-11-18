import { createContext } from "react";

export const AuthContext = createContext();
const authDetails = { name: "sam" };
const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={authDetails}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
