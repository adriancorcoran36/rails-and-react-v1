import React from "react";
import { useImagesQuery } from "graphql/types";
import { Image } from "../../components";

export const ImageDetail = () => {
  const { data: imagesData, loading } = useImagesQuery();

  if (loading) {
    return <span>"Loading..."</span>;
  }
  return (
    <div>
      <h1>Images</h1>
      <ul>
        {imagesData.images.map(({ id, title }) => (
          <Image title={title} key={id} />
        ))}
        {/* {imagesData.images.map(({ id, title, downloads }) => (
          <Image title={title} downloads={downloads} key={id} />
        ))} */}
      </ul>
      {/* <img src="https://media.gettyimages.com/photos/entrepreneur-interviewed-on-a-podcast-picture-id1401474061?s=2048x2048" /> */}
    </div>
  );
};
