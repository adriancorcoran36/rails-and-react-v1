import React from "react";
import { ImageBrowser } from "../../features";
import { Routes, Route } from "react-router-dom";

export const FeatureRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ImageBrowser />} />
    </Routes>
  );
};
