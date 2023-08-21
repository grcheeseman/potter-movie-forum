import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ name, image, release, id }) {
  return (
    <li className="card">
      <Link to={`/detail/${id}`}>
        <img src={image} alt={name} />
      </Link>
      <h4>{name}</h4>
      <p>Year Released: {release}</p>
    </li>
  );
}

export default MovieCard;
