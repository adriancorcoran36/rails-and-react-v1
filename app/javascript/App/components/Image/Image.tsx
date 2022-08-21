import React from "react";

interface ImageProps {
  title: string;
  downloads: number;
}

export const Image: React.FunctionComponent = ({
  title,
  downloads,
}: ImageProps) => {
  return (
    <li>
      {title} ({downloads} downloads)
    </li>
  );
};
