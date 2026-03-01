import IconBookmarkEmpty from "../../../public/assets/icon-bookmark-empty.svg?react";
import Rating from "./Rating.jsx";

const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/original";

function RecommendedMovieCard({ movie }) {
  const movieYear = new Date(movie.release_date).getFullYear();
  const rating = Math.round(movie.vote_average);
  return (
    <div className="flex flex-col gap-1">
      <div
        className="relative w-37.5 h-23.5 md:w-60 md:h-37.5 rounded-md bg-[url('../assets/thumbnails/beyond-earth/trending/large.jpg')] bg-cover bg-center"
        style={{
          backgroundImage: `url(${BACKDROP_BASE_URL}${movie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute cursor-pointer top-5 right-5 h-7.5 w-7.5 rounded-full bg-blue-tertiary flex justify-center items-center">
          <IconBookmarkEmpty className="hover:text-white text-blue-tertiary" />
        </div>
      </div>

      <div className="text-gray-300  md:text-body-sm text-[8px]">
        <div className="flex gap-2 justify-right items-center">
          <p>{movieYear}</p>
          <Rating value={rating} size={9} />
        </div>
        <h1 className="text-[16px] text-white">{movie.title}</h1>
      </div>
    </div>
  );
}

export default RecommendedMovieCard;
