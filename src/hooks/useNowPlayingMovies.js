import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovie = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjRmYTNmYTEwYTU4ZWQxMzFmNmE0NjM1NTk2MGQyZiIsIm5iZiI6MTc1NzI3NTcxMS4xNjUsInN1YiI6IjY4YmRlNjNmM2MyYjE2MmJhMjFmNTJiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jvQYn7mDZZ78i7TVjG7Z2JcYPzlBNHbwnLQPHxRdV3A",
      },
    };
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    );
    const json = await data.json();
    dispatch(addMovies(json.results));
    // console.log(json);
  };

  useEffect(() => {
    getNowPlayingMovie();
  }, []);
};

export default useNowPlayingMovies;
