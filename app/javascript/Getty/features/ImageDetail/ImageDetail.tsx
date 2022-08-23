import React from "react";
import { useSingleImageQuery } from "graphql/types";
import {
  BuyImage,
  ImageMeta,
  ImageTags,
  RelatedImages,
  SingleImage,
} from "./components";

interface ImageDetailProps {
  imageId: string;
}

export const ImageDetail = ({ imageId }: ImageDetailProps) => {
  const { data: imageDataReponse, loading } = useSingleImageQuery({
    variables: {
      id: imageId,
    },
  });

  if (loading) {
    return <span>"Loading..."</span>;
  }
  const imageData = imageDataReponse?.singleImage;

  return (
    <>
      <section id="image-details">
        <div id="image-detail">
          <SingleImage
            handle={imageData.handle}
            title={imageData.title}
            subtitle={imageData.subtitle}
            creativeNumber={imageData.creativeNumber}
          />
          {imageData.relatedImages && (
            <RelatedImages relatedImages={imageData.relatedImages} />
          )}
        </div>

        <div id="buy-image-meta">
          <BuyImage
            extraSmallPrice={imageData.extraSmallPrice}
            smallPrice={imageData.smallPrice}
            mediumPrice={imageData.mediumPrice}
            mediumDetails={imageData.mediumDetails}
            largePrice={imageData.largePrice}
          />
          <ImageMeta
            creativeNumber={imageData.creativeNumber}
            credit={imageData.credit}
            licenceType={imageData.licenceType}
            collection={imageData.collection}
            releaseInfo={imageData.releaseInfo}
          />
        </div>
      </section>

      <section>
        <ImageTags tags={imageData.tags} />
      </section>
    </>
  );
};
