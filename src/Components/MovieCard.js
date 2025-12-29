import { MOVIE_IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="w-36 sm:w-40 mr-2 flex-shrink-0">
      <img
        className="w-full h-full object-cover rounded-md"
        alt="Movie Card"
        src={MOVIE_IMG_CDN + posterPath}
      />
    </div>
  );
};

export default MovieCard;
