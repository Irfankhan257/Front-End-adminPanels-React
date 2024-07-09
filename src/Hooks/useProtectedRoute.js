// useProtectedRoute.js
import { useAuth } from "useAuth";
import { Navigate } from "react-router-dom";

const useProtectedRoute = (role, children) => {
  const { user } = useAuth;

  if (!user || user.role !== "innovator" || "investor") {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default useProtectedRoute;
