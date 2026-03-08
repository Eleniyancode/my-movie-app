import { useEffect, useRef, useState } from "react";
import SearchBar from "../components/ui/SearchBar";
import RecommendedMovieCard from "../components/ui/RecommendedMovieCard";
import { useMovieContext } from "../context/useMovieContext";
import QueryResultList from "../components/layout/QueryResultList";
import TVSeriesCard from "../components/ui/TVSeriesCard";

function Popular() {
  const { page, totalPages, loading, loadNextPage, tvSeries, fetchTVSeries } =
    useMovieContext();
  const [query, setQuery] = useState("");

  const containerRef = useRef(null);

  const pageRef = useRef(page);
  const loadingRef = useRef(loading);

  useEffect(() => {
    fetchTVSeries();
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
        <QueryResultList movies={tvSeries} query={query} />
      ) : (
        <>
          <div className="flex flex-col gap-5 mt-5 ">
            <h1 className="text-white font-outfit text-2xl">TV Series</h1>
            <ul className="grid grid-cols-2 md:flex justify-center items-center flex-wrap gap-5 md:gap-10">
              {tvSeries.map((movie) => (
                <TVSeriesCard key={movie.id} movie={movie} />
              ))}
            </ul>

            {loading && <p className="text-white">Loading more...</p>}
          </div>
        </>
      )}
    </div>
  );
}

export default Popular;
