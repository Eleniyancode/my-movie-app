import { useState } from "react";
import IconBookmarkEmpty from "../../../public/assets/icon-bookmark-empty.svg?react";
import { useMovieContext } from "../../context/useMovieContext.js";

import Rating from "./Rating.jsx";
import { NavLink } from "react-router-dom";
import { useBookmark } from "../../context/useBookmarkContext.js";
import PlayModal from "./PlayModal.jsx";

const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/original";

function RecommendedMovieCard({ movie }) {
  const { setId } = useMovieContext();
  const movieYear = new Date(movie.release_date).getFullYear();
  const rating = Math.round(movie.vote_average);
  const [isHovered, setIsHovered] = useState(false);
  const { isBookmarked } = useBookmark();
  const [isModalOpen, setIsModalOpen] = useState(false);

  function checkBookmark() {
    return isBookmarked(movie.id);
  }

  return (
    <div
      onClick={() => setIsModalOpen(true)}
      onMouseEnter={() => {
        setIsModalOpen(true);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsModalOpen(false);
        setIsHovered(false);
      }}
      className="flex flex-col gap-1 cursor-pointer"
    >
      <div
        className="relative w-37.5 h-23.5 md:w-60 md:h-37.5 rounded-md bg-[url('../assets/thumbnails/beyond-earth/trending/large.jpg')] bg-cover bg-center"
        style={{
          backgroundImage: `url(${BACKDROP_BASE_URL}${movie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {checkBookmark() && (
          <div className="absolute cursor-pointer top-5 right-5 h-7.5 w-7.5 rounded-full bg-blue-tertiary flex justify-center items-center transition-opacity duration-200">
            <IconBookmarkEmpty className=" text-white" />
          </div>
        )}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
        <PlayModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onPlay={() => setId(movie.id)}
          movie={movie}
          mediaType="movie"
        />
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
  );
}

export default RecommendedMovieCard;
