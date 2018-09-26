import React from "react";

const Travel = ({destination, country, photo, distance}) => (
  <figure>
    <img src={photo} alt="Photo Ville" />
    <figcaption>
      <h1>{destination}</h1>
      <h2>{country}</h2>
      <h3>{distance}</h3>
    </figcaption>
  </figure>
);

export default Travel;