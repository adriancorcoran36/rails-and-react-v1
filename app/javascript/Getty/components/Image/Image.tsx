import React from "react";

interface ImageProps {
  title: string;
  // downloads?: number;
}

export const Image: React.FunctionComponent = ({
  title,
}: // downloads,
ImageProps) => (
  <li>{title}</li>
  // <li>{`${title}${downloads ? ` (${downloads} downloads)` : ""}`}</li>
);
