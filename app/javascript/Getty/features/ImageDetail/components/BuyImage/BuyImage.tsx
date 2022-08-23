import React from "react";
import { Image } from "graphql/types";

interface BuyImageProps {
  extraSmallPrice: Image["extraSmallPrice"];
  smallPrice: Image["smallPrice"];
  mediumPrice: Image["mediumPrice"];
  mediumDetails: Image["mediumDetails"];
  largePrice: Image["largePrice"];
}

export const BuyImage: React.FunctionComponent = ({
  extraSmallPrice,
  smallPrice,
  mediumPrice,
  mediumDetails,
  largePrice,
}: BuyImageProps) => {
  return (
    <div id="buy-image">
      <h3>Purchase a license</h3>
      <p>
        All Royalty - Free licences include global use rights, comprehensive
        protection, and simple pricing with volume discounts available
      </p>
      <ul>
        <li>
          <p className="price-line">
            <span>Extra small</span>
            <span>{`${(extraSmallPrice / 100).toFixed(2)} €`}</span>
          </p>
        </li>
        <li>
          <p className="price-line">
            <span>Small</span>
            <span>{`${(smallPrice / 100).toFixed(2)} €`}</span>
          </p>
        </li>
        <li className="on">
          <p className="price-line">
            <span>Medium</span>
            <span>{`${(mediumPrice / 100).toFixed(2)} €`}</span>
          </p>
          <p className="price-line-details">{`${mediumDetails}`}</p>
        </li>
        <li>
          <p className="price-line">
            <span>Large</span>
            <span>{`${(largePrice / 100).toFixed(2)} €`}</span>
          </p>
        </li>
        <li>
          <p className="price-line">
            <span>Market-freeze</span>
          </p>
          <p className="price-line-details">
            Protect your creative work - we'll remove this image from our site
            for as long as you need it.
          </p>
        </li>
      </ul>

      <p className="selected-price">{`${(mediumPrice / 100).toFixed(
        2
      )} € EUR`}</p>

      <a className="cta-primary" title="Add to basket">
        Add to basket
      </a>
    </div>
  );
};
