import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "../components/ui/Rating";
import IconBookmarkEmpty from "../../public/assets/icon-bookmark-empty.svg?react";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 🎬 Fetch Single Movie Details
    const fetchMovieDetails = async (id) => {
      try {
        setLoading(true);
        const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
        const data = await res.json();
        console.log(data);
        setMovie(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails(id);
  }, [id]);

  //   const rating = Math.round(movie.vote_average);

  if (loading) return <p>Loading...</p>;

  if (!movie) return <p>Movie not found</p>;

  return (
    <div className="text-white mx-10  w-full h-screen overflow-y-scroll p-10">
      <div className="w-full h-[80%]">
        <img
          src={`${BACKDROP_BASE_URL}${movie.backdrop_path}`}
          alt={movie.title}
          className="w-full h-full"
        />
      </div>

      <div className="mt-5 flex justify-between items-center pr-10">
        <div>
          <p className="text-xl">{movie.title}</p>
          <Rating value={Math.round(movie.vote_average)} />
        </div>

        <button className="flex bg-white text-blue-tertiary p-3 px-9 rounded-2xl cursor-pointer hover:text-red-500 hover:bg-blue-secondary transition duration-500 justify-center items-center gap-3">
          <span>Bookmark</span>
          <IconBookmarkEmpty className=" " />
        </button>
      </div>

      <div className="mt-5 flex flex-col gap-5">
        <div>
          <h3 className="text-xl">Movie Overview</h3>
          <p>{movie.overview}</p>
        </div>

        <div>
          <h3>Released Date</h3>
          <p>{movie.release_date}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
