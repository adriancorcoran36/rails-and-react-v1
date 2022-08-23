import React from "react";
import { useSingleImageQuery } from "graphql/types";
import { SingleImage } from "../../components";

interface ImageDetailProps {
  imageId: string;
}

export const ImageDetail = ({ imageId }: ImageDetailProps) => {
  const { data: imageData, loading } = useSingleImageQuery({
    variables: {
      id: imageId,
    },
  });

  if (loading) {
    return <span>"Loading..."</span>;
  }
  const { title, tags } = imageData?.singleImage;

  const tagMarkup = tags ? tags.map((tag) => <a>{tag.title}</a>) : "";

  return (
    <section id="image-detail">
      <div id="image-details">
        <SingleImage title={title} tags={tags} />
      </div>

      <div id="image-tags">{tagMarkup}</div>
    </section>
  );
};

{
  /* <img src="https://media.gettyimages.com/photos/entrepreneur-interviewed-on-a-podcast-picture-id1401474061?s=2048x2048" /> */
}
