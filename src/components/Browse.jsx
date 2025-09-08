import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import upcomingMoviesHook from "../hooks/useUpcomingMovies.js";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch.jsx";

const Browse = () => {
  useNowPlayingMovies();
  upcomingMoviesHook();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
