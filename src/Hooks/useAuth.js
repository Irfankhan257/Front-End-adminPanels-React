import { useState } from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthenticatedInnovator, setIsAuthenticatedInnovator] =
    useState(false);

  const signIn = (userData) => {
    if (userData.role === "investor") {
      setIsAuthenticated(true);
      setIsAuthenticatedInnovator(false);
      localStorage.setItem("isAuthenticated", true);
    } else if (userData.role === "innovator") {
      setIsAuthenticated(false);
      setIsAuthenticatedInnovator(true);
      localStorage.setItem("isAuthenticatedInnovator", true);
      console.log(userData.role);
    }
  };

  return {
    isAuthenticated,
    isAuthenticatedInnovator,
    signIn,
  };
};

export default useAuth;
