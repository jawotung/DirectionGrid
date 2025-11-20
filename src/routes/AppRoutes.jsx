import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import DirectionGrid from "../pages/Direction/DirectionGrid";
import NotFound from "../layout/NotFound";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DirectionGrid />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
