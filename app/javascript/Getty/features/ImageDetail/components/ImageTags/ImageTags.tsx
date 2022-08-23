import React from "react";
import { Image } from "graphql/types";

export const ImageTags: React.FunctionComponent = ({
  tags,
}: {
  tags: Image["tags"];
}) => {
  const tagsMarkup = tags ? (
    <div id="image-tags">
      {tags.map((tag, i) => (
        <a key={i}>{tag.title}</a>
      ))}
    </div>
  ) : null;

  return tagsMarkup;
};
