import React from "react";
import { Image } from "graphql/types";

interface RelatedImagesProps {
  relatedImages: Image["relatedImages"];
}

export const RelatedImages: React.FunctionComponent = ({
  relatedImages,
}: RelatedImagesProps) => {
  const images = relatedImages.map(({ handle, creativeNumber }) => {
    const imgSrc = `https://media.gettyimages.com/photos/${handle}-picture-id${creativeNumber}?k=20&amp;m=1401474062&amp;s=228x150&amp;w=0&amp;h=o2Rr7P-ddFkv8BWLGqAxAeFhfa-l_z1P_pBE-Siy15E=`;
    return <img src={imgSrc} key={creativeNumber} />;
  });
  return (
    <div id="related-images">
      <p>Same Series</p>
      {images}
    </div>
  );
};
