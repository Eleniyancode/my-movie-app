import IconBookmarkEmpty from "../../../public/assets/icon-bookmark-empty.svg?react";
import Rating from "./Rating";

const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/original";

function TrendingMovieCard({ movie }) {
  const movieYear = new Date(movie.release_date).getFullYear();
  const rating = Math.round(movie.vote_average);

  return (
    <div
      className={`relative w-125 h-62.5 rounded-md bg-[url(${BACKDROP_BASE_URL}${movie.backdrop_path})] bg-cover bg-center`}
      style={{
        backgroundImage: `url(${BACKDROP_BASE_URL}${movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute cursor-pointer top-5 right-5 h-7.5 w-7.5 rounded-full bg-blue-tertiary flex justify-center items-center">
        <IconBookmarkEmpty className="hover:text-white text-blue-tertiary" />
      </div>

      <div className="absolute bottom-5 left-5 text-gray-300">
        <div className="flex gap-2 justify-center items-center">
          <p>{movieYear}</p>
          <Rating value={rating} size={14} />
        </div>
        <h1 className="text-lg text-white">{movie.title}</h1>
      </div>
    </div>
  );
}

export default TrendingMovieCard;
