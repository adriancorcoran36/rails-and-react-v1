import React from "react";
import { Image } from "graphql/types";

interface ImageMetaProps {
  creativeNumber: Image["creativeNumber"];
  credit: Image["credit"];
  licenceType: Image["licenceType"];
  collection: Image["collection"];
  releaseInfo: Image["releaseInfo"];
}

export const ImageMeta: React.FunctionComponent = ({
  creativeNumber,
  credit,
  licenceType,
  collection,
  releaseInfo,
}: ImageMetaProps) => (
  <div id="image-meta">
    <h4>Details</h4>
    <p>
      <span>Credit</span>
      <a title="Credit">{credit}</a>
    </p>
    <p>
      <span>Creative #</span>
      <span>{creativeNumber}</span>
    </p>
    <p>
      <span>Licence type</span>
      <a title="License type">{licenceType}</a>
    </p>
    <p>
      <span>Collection</span>
      <span>{collection}</span>
    </p>
    <p>
      <span>Release info</span>
      <span>{releaseInfo}</span>
    </p>
  </div>
);
