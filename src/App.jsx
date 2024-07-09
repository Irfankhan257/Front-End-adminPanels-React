import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import useAuth from "./Hooks/useAuth"; // Import your custom hook

import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import Investorlayout from "layouts/investor";
import Innovatorlayout from "layouts/innovator";
import InnovatorAuthLayout from "layouts/innovatorauth";
import InvesTechWebsite from "views/homepage/Index";
import InvestorAuthLayout from "layouts/investorauth";
import SignUpLayout from "layouts/signup";
import SignUp from "views/signup/signup";

const App = () => {
  return (
    <Routes>
      <Route path="innovatorsignin/*" element={<InnovatorAuthLayout />} />
      <Route
        path="investor/*"
        element={
          localStorage.getItem("isAuthenticated") ? (
            <Investorlayout />
          ) : (
            <Navigate to="/investorsignin" />
          )
        }
      />
      <Route
        path="innovator/*"
        element={
          localStorage.getItem("isAuthenticatedInnovator") ? (
            <Innovatorlayout />
          ) : (
            <Navigate to="/innovatorsignin" />
          )
        }
      />
      <Route path="rtl/*" element={<RtlLayout />} />
      <Route path="signup/*" element={<SignUpLayout />} />
      <Route path="/" element={<Navigate to="/homepage" replace />} />
      <Route path="/homepage/*" element={<InvesTechWebsite />} />
      <Route path="/investorsignin/*" element={<InvestorAuthLayout />} />
    </Routes>
  );
};

export default App;
