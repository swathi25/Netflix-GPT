import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePlayingMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json);
    const movieTrailers = json.results.filter(
      (movie) => movie.type === "Trailer"
    );
    //console.log(movieTrailer);
    const neededTrailer = movieTrailers.length
      ? movieTrailers.find((movie) => movie.name === "Official Trailer")
      : json.results[0];
    //console.log(neededTrailer);
    dispatch(addTrailerVideo(neededTrailer));
  };
  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default usePlayingMovieTrailer;
