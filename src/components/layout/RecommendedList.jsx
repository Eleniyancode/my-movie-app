import { useMovieContext } from "../../context/useMovieContext";
import RecommendedMovieCard from "../ui/RecommendedMovieCard";

function RecommendedList() {
  const { movies, loading } = useMovieContext();

  return (
    <div className="flex flex-col gap-5 mt-5 ">
      <h1 className="text-white font-outfit text-2xl">Recommended for you</h1>
      <ul className="flex justify-center items-center flex-wrap gap-5 md:gap-10">
        {movies.map((movie) => (
          <RecommendedMovieCard key={movie.id} movie={movie} />
        ))}
      </ul>

      {loading && <p className="text-white">Loading more...</p>}
    </div>
  );
}

export default RecommendedList;
