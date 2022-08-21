import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import { withProvider } from "../graphqlProvider";

const imagesQuery = gql`
  query Images {
    images {
      id
      title
    }
  }
`;
const Image: React.FunctionComponent = ({ title }) => {
  return <li>{title}</li>;
};
const Images = () => {
  const { data, loading } = useQuery(imagesQuery);

  if (loading) {
    return <span>"Loading..."</span>;
  }
  return (
    <div>
      <h1>Images</h1>
      <ul>
        {data.images.map((image) => (
          <Image {...image} key={image.id} />
        ))}
      </ul>
    </div>
  );
};
export default withProvider(Images);
