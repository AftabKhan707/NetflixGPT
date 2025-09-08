import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../utils/movieSlice";

const upcomingMoviesHook = () => {
  const dispatch = useDispatch();
  const upcomingMovie = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjRmYTNmYTEwYTU4ZWQxMzFmNmE0NjM1NTk2MGQyZiIsIm5iZiI6MTc1NzI3NTcxMS4xNjUsInN1YiI6IjY4YmRlNjNmM2MyYjE2MmJhMjFmNTJiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jvQYn7mDZZ78i7TVjG7Z2JcYPzlBNHbwnLQPHxRdV3A",
      },
    };

    const data = await fetch(url, options);
    const upcomingmovies = await data.json();
    // console.log("Upcoming", upcomingmovies);
    dispatch(addUpComingMovies(upcomingmovies.results));
  };

  useEffect(() => {
    upcomingMovie();
  }, []);
};

export default upcomingMoviesHook;
