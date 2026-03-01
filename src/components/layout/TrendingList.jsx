import { useMovieContext } from "../../context/useMovieContext";
import Carousel from "../ui/Carousel";
import TrendingMovieCard from "../ui/TrendingMovieCard";

// const slides = [
//   <MovieCard />,
//   <MovieCard />,
//   <MovieCard />,
//   <MovieCard />,
//   <MovieCard />,
//   <MovieCard />,
//   <MovieCard />,
// ];

function TrendingList() {
  const { trendingMovies } = useMovieContext();
  const slides = trendingMovies.map((movie) => (
    <TrendingMovieCard movie={movie} />
  ));
  return (
    <div className="flex flex-col gap-5 mt-5 ">
      <h1 className="text-white font-outfit text-2xl">Trending</h1>
      <Carousel
        slides={slides}
        autoPlay
        interval={2000}
        showDots={false}
        showArrows={false}
      />
    </div>
  );
}

export default TrendingList;
