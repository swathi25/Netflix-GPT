import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || !movies.length) return null;
  //console.log("Title is :" + title);

  return (
    <div>
      <h1 className="font-bold text-2xl mb-2 text-white">{title}</h1>
      <div className="relative">
        <div className="flex overflow-x-auto scrollbar-hide space-x-2 pb-2">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
