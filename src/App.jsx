// src/App.js
import React from "react";
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";

import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import InvestorLayout from "layouts/investor";
import InnovatorLayout from "layouts/innovator";
import InnovatorAuthLayout from "layouts/innovatorauth";
import InvesTechWebsite from "views/homepage/Index";
import InvestorAuthLayout from "layouts/investorauth";
import SignUpLayout from "layouts/signup";
import RoleProtectedRoute from "Hooks/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="innovatorsignin/*" element={<InnovatorAuthLayout />} />
        <Route
          path="/investor/*"
          element={
            <RoleProtectedRoute requiredRole="investor">
              <InvestorLayout />
            </RoleProtectedRoute>
          }
        />
        <Route
          path="/innovator/*"
          element={
            <RoleProtectedRoute requiredRole="innovator">
              <InnovatorLayout />
            </RoleProtectedRoute>
          }
        />
        <Route path="signup/*" element={<SignUpLayout />} />
        <Route path="/" element={<Navigate to="/homepage" replace />} />
        <Route path="/homepage/*" element={<InvesTechWebsite />} />
        <Route path="/investorsignin/*" element={<InvestorAuthLayout />} />
      </Routes>
    </Router>
  );
};

export default App;
