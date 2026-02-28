import MovieCard from "../ui/MovieCard";

function TrendingList() {
  return (
    <ul className="flex ">
      <h1>Trending</h1>
      <li>
        <MovieCard />
      </li>
    </ul>
  );
}

export default TrendingList;
