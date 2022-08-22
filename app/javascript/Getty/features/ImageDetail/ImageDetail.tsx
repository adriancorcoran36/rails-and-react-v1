import React from "react";
import { useImagesQuery } from "graphql/types";
import { SingleImage } from "../../components";

export const ImageDetail = () => {
  const { data: imagesData, loading } = useImagesQuery();

  console.log(imagesData);

  if (loading) {
    return <span>"Loading..."</span>;
  }
  return (
    <div>
      <h1>Images</h1>
      <ul>
        {imagesData.images.map(({ id, title, tags }) => (
          <SingleImage title={title} tags={tags} key={id} />
        ))}
      </ul>
      {/* <img src="https://media.gettyimages.com/photos/entrepreneur-interviewed-on-a-podcast-picture-id1401474061?s=2048x2048" /> */}
    </div>
  );
};
