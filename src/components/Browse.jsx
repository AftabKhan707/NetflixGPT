import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import upcomingMoviesHook from "../hooks/useUpcomingMovies.js";

const Browse = () => {
  useNowPlayingMovies();
  upcomingMoviesHook();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
