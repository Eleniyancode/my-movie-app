import { useEffect, useRef, useState } from "react";
import SearchBar from "../ui/SearchBar";
import RecommendedList from "./RecommendedList";
import TrendingList from "./TrendingList";
import { useMovieContext } from "../../context/useMovieContext";
import QueryResultList from "./QueryResultList";

function Main() {
  const { page, totalPages, loading, loadNextPage, movies } = useMovieContext();
  const [query, setQuery] = useState("");

  const containerRef = useRef(null);

  const pageRef = useRef(page);
  const loadingRef = useRef(loading);

  useEffect(() => {
    pageRef.current = page;
    loadingRef.current = loading;
  }, [page, loading]);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;
      console.log("scroling");
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
        <QueryResultList movies={movies} />
      ) : (
        <>
          <TrendingList />
          <RecommendedList />
        </>
      )}
    </div>
  );
}

export default Main;
