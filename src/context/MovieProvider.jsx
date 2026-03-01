import { useState, useEffect, useCallback } from "react";
import { MovieContext } from "./MovieContext";
import { useAuth } from "./useAuthContext";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const MovieProvider = ({ children }) => {
  // const { user } = useAuth();
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Pagination state
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Current search query (if any)
  const [query, setQuery] = useState("");

  // 🔥 Fetch Popular Movies
  const fetchTrendingMovies = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`,
      );
      const data = await res.json();
      console.log(data.results);
      setTrendingMovies(data.results);
    } catch (err) {
      setError("Failed to fetch trending movies");
    } finally {
      setLoading(false);
    }
  };

  // 🔥 Fetch Popular Movies
  const fetchPopularMovies = async (pageNum = 1) => {
    try {
      setLoading(true);
      const res = await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${pageNum}`,
      );
      const data = await res.json();
      console.log(data.results);
      setMovies((prev) =>
        pageNum === 1 ? data.results : [...prev, ...data.results],
      );
      setPage(data.page);
      setTotalPages(data.total_pages);
    } catch (err) {
      setError("Failed to fetch movies");
    } finally {
      setLoading(false);
    }
  };

  // Search Movies
  const searchMovies = async (searchQuery, pageNum = 1) => {
    try {
      setLoading(true);
      setQuery(searchQuery);

      const res = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${pageNum}`,
      );
      const data = await res.json();
      setMovies((prev) =>
        pageNum === 1 ? data.results : [...prev, ...data.results],
      );
      setPage(data.page);
      setTotalPages(data.total_pages);
    } catch (err) {
      setError("Search failed");
    } finally {
      setLoading(false);
    }
  };

  // Load next page for current context
  const loadNextPage = useCallback(() => {
    if (page >= totalPages) return; // No more pages

    const nextPage = page + 1;

    if (query) {
      searchMovies(query, nextPage);
    } else {
      fetchPopularMovies(nextPage);
    }
  }, [page, totalPages, query]);

  // 🎬 Fetch Single Movie Details
  const fetchMovieDetails = async (id) => {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
      const data = await res.json();
      setMovie(data);
    } catch (err) {
      setError("Failed to fetch movie details");
    } finally {
      setLoading(false);
    }
  };

  // ▶ Fetch Movie Trailer
  const fetchMovieTrailer = async (id) => {
    try {
      const res = await fetch(
        `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`,
      );
      const data = await res.json();

      const trailer = data.results.find(
        (vid) => vid.type === "Trailer" && vid.site === "YouTube",
      );

      setTrailer(trailer ? trailer.key : null);
    } catch (err) {
      setError("Failed to fetch trailer");
    }
  };

  useEffect(() => {
    fetchTrendingMovies();
    fetchPopularMovies();
  }, []);

  return (
    <MovieContext.Provider
      value={{
        trendingMovies,
        movies,
        movie,
        trailer,
        loading,
        setLoading,
        error,
        fetchPopularMovies,
        fetchMovieDetails,
        fetchMovieTrailer,
        searchMovies,
        page,
        totalPages,
        loadNextPage,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
