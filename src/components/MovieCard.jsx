import React from "react";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="w-48 pr-4">
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
