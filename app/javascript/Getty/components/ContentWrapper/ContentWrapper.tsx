import React from "react";

export const ContentWrapper: React.FunctionComponent = ({ children }) => (
  <div>
    <p>Page Title</p>
    {children}
  </div>
);
