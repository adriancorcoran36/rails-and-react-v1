import React from "react";
const data = {
  images: [
    {
      id: "1",
      title: '"Evening sunset over fields"',
    },
    {
      id: "2",
      title: '"Happy child"',
    },
    {
      id: "3",
      title: '"Traffic in the morning"',
    },
  ],
};
const loading = false;
const Image: React.FunctionComponent = ({ title }) => {
  return <li>{title}</li>;
};
const Images = () => {
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
export default Images;
