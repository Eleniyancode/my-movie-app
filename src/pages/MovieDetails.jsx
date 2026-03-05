import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "../components/ui/Rating";
import IconBookmarkEmpty from "../../public/assets/icon-bookmark-empty.svg?react";
import Spinner from "../components/ui/Spinner";
import YouTubePlayer from "../components/ui/YoutubePlayer";
import { useAuth } from "../context/useAuthContext";
import { useBookmark } from "../context/useBookmarkContext";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);

  const { user } = useAuth();
  const { addBookmark, removeBookmark, isBookmarked, loadingBookmark } =
    useBookmark();

  function handleBookmark() {
    if (!user) return;

    if (isBookmarked) {
      removeBookmark(movie.id);
    } else {
      addBookmark(movie);
    }
  }

  useEffect(() => {
    // 🎬 Fetch Single Movie Details
    const fetchMovieDetails = async (id) => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(
          `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`,
        );

        if (!res.ok) throw new Error("Failed to fetch movie");

        const data = await res.json();
        console.log(data);
        setMovie(data);

        const trailer = data.videos.results.find(
          (vid) => vid.type === "Trailer" && vid.site === "YouTube",
        );
        if (trailer) setTrailerKey(trailer.key);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails(id);
  }, [id]);

  //   const rating = Math.round(movie.vote_average);

  if (loading) return <Spinner fullScreen={true} />;

  if (error) return <p className="text-red-500">{error}</p>;

  if (!movie) return <p>Movie not found</p>;

  return (
    <div className="text-white mx-10  w-full h-screen overflow-y-scroll p-10">
      <div className="w-full h-[60%]">
        {trailerKey && <YouTubePlayer videoId={trailerKey} />}
      </div>

      <div className="mt-5 flex justify-between items-center pr-10">
        <div>
          <p className="text-xl">{movie.title}</p>
          <Rating value={Math.round(movie.vote_average)} />
        </div>

        <button
          onClick={() => handleBookmark()}
          className={`flex bg-white text-blue-tertiary p-3 px-9 rounded-2xl cursor-pointer hover:text-red-500 hover:bg-blue-secondary ${isBookmarked ? "bg-blue-secondary text-red-primary" : ""} transition duration-500 justify-center items-center gap-3`}
        >
          {loadingBookmark ? (
            <Spinner />
          ) : (
            <>
              <span>Bookmark</span>
              <IconBookmarkEmpty className=" " />
            </>
          )}
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
