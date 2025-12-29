import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="relative z-20 -mt-24 px-6 pb-10 ">
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
      <MovieList title="Popular" movies={movies.popularMovies} />
      <MovieList title="Top Rated Movies" movies={movies.topRatedMovies} />
      <MovieList title="UPComing" movies={movies.upComingMovies} />
    </div>
  );
};

export default SecondaryContainer;
