import { useEffect, useRef, useState } from "react";
import SearchBar from "../components/ui/SearchBar";
import RecommendedMovieCard from "../components/ui/RecommendedMovieCard";
import { useMovieContext } from "../context/useMovieContext";
import QueryResultList from "../components/layout/QueryResultList";

function Trending() {
  const {
    page,
    totalPages,
    loading,
    loadNextPage,
    movies,
    fetchTrendingMovies,
  } = useMovieContext();
  const [query, setQuery] = useState("");

  const containerRef = useRef(null);

  const pageRef = useRef(page);
  const loadingRef = useRef(loading);

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  useEffect(() => {
    pageRef.current = page;
    loadingRef.current = loading;
  }, [page, loading]);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      if (
        container.scrollTop + container.clientHeight >=
          container.scrollHeight - 20 &&
        pageRef.current < totalPages &&
        !loadingRef.current
      ) {
        console.log("loadnext page");
        loadNextPage();
      }
    };

    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [totalPages, loadNextPage]);

  return (
    <div
      ref={containerRef}
      className="mx-5 w-[95%] mt-5 mb-5 lg:pb-20 h-screen overflow-y-scroll  bg-blue-primary"
    >
      <SearchBar query={query} setQuery={setQuery} />
      {query ? (
        <QueryResultList movies={movies} query={query} />
      ) : (
        <>
          <div className="flex flex-col gap-5 mt-5 ">
            <h1 className="text-white font-outfit text-2xl">Trending Movies</h1>
            <ul className="flex justify-center items-center flex-wrap gap-5 md:gap-10">
              {movies.map((movie) => (
                <RecommendedMovieCard key={movie.id} movie={movie} />
              ))}
            </ul>

            {loading && <p className="text-white">Loading more...</p>}
          </div>
        </>
      )}
    </div>
  );
}

export default Trending;
