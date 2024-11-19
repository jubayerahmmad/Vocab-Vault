import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const { pathname } = useLocation();

  if (loader) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
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
