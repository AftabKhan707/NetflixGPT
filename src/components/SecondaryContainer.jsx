import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);

  return (
    movies.playingMovies && (
      <div className="bg-black">
        <div className="-mt-52 pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.playingMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
          <MovieList title={"Popular"} movies={movies.playingMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.playingMovies} />
          <MovieList title={"Horror"} movies={movies.playingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
