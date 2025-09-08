import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movie_id) => {
  const dispatch = useDispatch();
  const url = `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjRmYTNmYTEwYTU4ZWQxMzFmNmE0NjM1NTk2MGQyZiIsIm5iZiI6MTc1NzI3NTcxMS4xNjUsInN1YiI6IjY4YmRlNjNmM2MyYjE2MmJhMjFmNTJiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jvQYn7mDZZ78i7TVjG7Z2JcYPzlBNHbwnLQPHxRdV3A",
    },
  };
  const videos = async () => {
    const data = await fetch(url, options);
    const videos = await data.json();
    const video = videos.results.filter((obj) => obj.type === "Trailer");
    console.log("In dispatch");
    dispatch(addTrailerVideo(video[0]));
  };
  useEffect(() => {
    videos();
  }, []);
};
export default useMovieTrailer;
