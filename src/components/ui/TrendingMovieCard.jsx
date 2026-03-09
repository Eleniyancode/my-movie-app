import { NavLink } from "react-router-dom";
import IconBookmarkEmpty from "../../../public/assets/icon-bookmark-empty.svg?react";
import Rating from "./Rating";
import { useMovieContext } from "../../context/useMovieContext";
import { useState } from "react";
import { useBookmark } from "../../context/useBookmarkContext";
import PlayModal from "./PlayModal";

const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/original";

function TrendingMovieCard({ movie }) {
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
      onClick={() => {
        setIsModalOpen(true);
      }}
      onMouseEnter={() => {
        setIsModalOpen(true);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsModalOpen(false);
        setIsHovered(false);
      }}
      className={`cursor-pointer relative w-65 md:w-125 h-62.5 rounded-md bg-[url(${BACKDROP_BASE_URL}${movie.backdrop_path})] bg-cover bg-center`}
      style={{
        backgroundImage: `url(${BACKDROP_BASE_URL}${movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {checkBookmark() && (
        <div className="absolute cursor-pointer top-5 right-5 h-7.5 w-7.5 rounded-full bg-blue-tertiary flex justify-center items-center">
          <IconBookmarkEmpty className="hover:text-white text-blue-tertiary" />
        </div>
      )}

      <div className="absolute bottom-5 left-5 text-gray-300">
        <div className="flex gap-2 justify-center items-center">
          <p>{movieYear}</p>
          <Rating value={rating} size={14} showNumber={false} />
        </div>
        <h1
          className={`text-lg ${isHovered ? "underline text-red-primary" : "text-white"}`}
        >
          {movie.title}
        </h1>
      </div>
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <PlayModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onPlay={() => setId(movie.id)}
        movie={movie}
        mediaType="movie"
      />
    </div>
  );
}

export default TrendingMovieCard;
