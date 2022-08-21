import React from "react";
import gql from "graphql-tag";
import { withProvider } from "../graphqlProvider";
import { useImagesQuery } from "graphql/types";
import { Image } from "./components";

const Images = () => {
  const { data: imagesData, loading } = useImagesQuery();

  if (loading) {
    return <span>"Loading..."</span>;
  }
  return (
    <div>
      <h1>Images</h1>
      <ul>
        {imagesData.images.map(({ id, title, downloads }) => (
          <Image title={title} downloads={downloads} key={id} />
        ))}
      </ul>
    </div>
  );
};
export default withProvider(Images);
