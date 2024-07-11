import { selectIsAuthenticated } from "features/auth/authSlice";
import { selectRole } from "features/auth/authSlice";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RoleProtectedRoute = ({ children, requiredRole }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const role = useSelector(selectRole);
  console.log(role);

  if (!isAuthenticated) {
    return <Navigate to="/innovatorsignin" />;
  }

  if (role !== requiredRole) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default RoleProtectedRoute;
