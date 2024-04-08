import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import Investorlayout from "layouts/investor"
import Innovatorlayout from "layouts/innovator"
import InnovatorAuthLayout from "layouts/innovatorauth";
import InvesTechWebsite from "views/homepage/Index";
import InvestorAuthLayout from "layouts/investorauth"

const App = () => {
  return (
    <Routes>
      <Route path="innovatorsignin/*" element={<InnovatorAuthLayout />} />
      <Route path="investor/*" element={<Investorlayout />} />
      <Route path="innovator/*" element={<Innovatorlayout />} />
      <Route path="rtl/*" element={<RtlLayout />} />
      {/* <Route path="/" element={<Navigate to="/admin" replace />} /> */}
      <Route path="/homepage/*" element={<InvesTechWebsite />} />
      <Route path="/investorsignin/*" element={<InvestorAuthLayout />} />

    </Routes>
  );
};

export default App;
