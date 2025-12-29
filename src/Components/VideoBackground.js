import { useSelector } from "react-redux";
import usePlayingMovieTrailer from "../hooks/usePlayingMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  usePlayingMovieTrailer(movieId);

  return (
    <div>
      <iframe
        className="absolute inset-0 w-full h-full z-0"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};

export default VideoBackground;
