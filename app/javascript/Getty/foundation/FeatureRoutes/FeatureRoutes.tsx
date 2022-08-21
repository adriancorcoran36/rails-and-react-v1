import React from "react";
import { ImageDetail } from "../../features";
import { Routes, Route } from "react-router-dom";

export const FeatureRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ImageDetail />} />
    </Routes>
  );
};
