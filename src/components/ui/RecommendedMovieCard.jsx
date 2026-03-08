import { useState } from "react";
import IconBookmarkEmpty from "../../../public/assets/icon-bookmark-empty.svg?react";
import { useMovieContext } from "../../context/useMovieContext.js";

import Rating from "./Rating.jsx";
import { NavLink } from "react-router-dom";
import { useBookmark } from "../../context/useBookmarkContext.js";

const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/original";

function RecommendedMovieCard({ movie }) {
  const { setId } = useMovieContext();
  const movieYear = new Date(movie.release_date).getFullYear();
  const rating = Math.round(movie.vote_average);
  const [isHovered, setIsHovered] = useState(false);
  const { isBookmarked } = useBookmark();

  function checkBookmark() {
    return isBookmarked(movie.id);
  }

  return (
    <NavLink
      to={`/movie/${movie.id}`}
      onClick={() => setId(movie.id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col gap-1 cursor-pointer">
        <div
          className="relative w-37.5 h-23.5 md:w-60 md:h-37.5 rounded-md bg-[url('../assets/thumbnails/beyond-earth/trending/large.jpg')] bg-cover bg-center"
          style={{
            backgroundImage: `url(${BACKDROP_BASE_URL}${movie.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {checkBookmark() && (
            <div className="absolute cursor-pointer top-5 right-5 h-7.5 w-7.5 rounded-full bg-blue-tertiary flex justify-center items-center">
              <IconBookmarkEmpty className=" text-white" />
            </div>
          )}
        </div>

        <div className="text-gray-300  md:text-body-sm text-[8px]">
          <div className="flex gap-2 justify-right items-center">
            <p>{movieYear}</p>
            <Rating value={rating} size={9} showNumber={false} />
          </div>
          <h1
            className={`text-[16px]  ${isHovered ? "underline text-red-primary" : "text-white"}`}
          >
            {movie.title}
          </h1>
        </div>
      </div>
    </NavLink>
  );
}

export default RecommendedMovieCard;
