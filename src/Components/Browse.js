import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpcomingMovies";
import GptSearchPage from "./GptSearchPage";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const gptSearchView = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  return (
    <div className="bg-black overflow-x-hidden">
      <Header />
      {gptSearchView ? (
        <div className="bg-white min-h-screen">
          <GptSearchPage />
        </div>
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
