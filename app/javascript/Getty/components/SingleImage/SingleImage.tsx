import React from "react";
import { Image } from "graphql/types";

export const SingleImage: React.FunctionComponent = ({
  title,
  tags,
}: Image) => (
  <li>{`${title}${
    tags ? ` (${tags.map((tag) => tag.title).join(", ")})` : ""
  }`}</li>
);
