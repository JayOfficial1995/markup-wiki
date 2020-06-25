import React from "react";

import "./card.scss";

function Card({
  thumbnailImg,
  imageAlt,
  title,
  subTitle,
  description,
  readTime,
}) {
  return (
    <figure className="card-wrapper">
      <picture className="thumbnail">
        <img src={thumbnailImg} alt={imageAlt} className="thumbnail-image" />
      </picture>
      <figcaption>
        <h3 className="read-time">{readTime}</h3>
        <h2 className="title">{title}</h2>
        <h3 className="subtitle">{subTitle}</h3>
        <p className="descritption">{description}</p>
      </figcaption>
    </figure>
  );
}

export default Card;
