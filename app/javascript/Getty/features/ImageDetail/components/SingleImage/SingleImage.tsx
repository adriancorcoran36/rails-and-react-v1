import React from "react";
import { Image } from "graphql/types";

interface SingleImageProps {
  handle: Image["handle"];
  title: Image["title"];
  subtitle: Image["subtitle"];
  creativeNumber: Image["creativeNumber"];
}

export const SingleImage: React.FunctionComponent = ({
  handle,
  title,
  subtitle,
  creativeNumber,
}: SingleImageProps) => {
  const imgSrc = `https://media.gettyimages.com/photos/${handle}-picture-id${creativeNumber}?s=2048x2048`;

  return (
    <div id="single-image">
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
      <img src={imgSrc} />
    </div>
  );
};
