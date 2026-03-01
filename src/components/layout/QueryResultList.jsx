import { useMovieContext } from "../../context/useMovieContext";
import RecommendedMovieCard from "../ui/RecommendedMovieCard";

function QueryResultList({ query }) {
  const { movies, loading, totalPages } = useMovieContext();
  const numberOfMoviesFound = Math.round(totalPages / 20);

  return (
    <div className="flex flex-col gap-5 mt-5 ">
      <h1 className="text-white font-outfit text-2xl">
        Found {numberOfMoviesFound} results for {`"${query}"`}
      </h1>
      <ul className="flex justify-center items-center flex-wrap gap-5 md:gap-10">
        {movies.map((movie) => (
          <RecommendedMovieCard key={movie.id} movie={movie} />
        ))}
      </ul>

      {loading && <p className="text-white">Loading more...</p>}
    </div>
  );
}

export default QueryResultList;
