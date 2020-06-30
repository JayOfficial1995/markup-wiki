import React from "react";

import "./card.scss";

function Card({
  image,
  imageAlt,
  title,
  description,
  designation,
  date,
  readTime,
}) {
  return (
    <figure className="card-wrapper">
      <picture className="thumbnail">
        <img src={image} alt={imageAlt} className="thumbnail-image" />
      </picture>
      <figcaption>
        {readTime && (<h3 className="read-time">{readTime}</h3>)}
        <h2 className="title">{title}</h2>
        {designation && <h3 className="designation">{designation}</h3>}
        {date && <h3 className="date">{date}</h3>}
        <p className="descritption">{description}</p>
      </figcaption>
    </figure>
  );
}

export default Card;
