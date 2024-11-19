import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const { pathname } = useLocation();
  console.log(pathname);

  if (user) {
    return children;
  }
  return (
    <div>
      <Navigate state={pathname} to="/login"></Navigate>
    </div>
  );
};

export default PrivateRoute;
