import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import MovieDetails from "./pages/MovieDetails";
import NotFound from "./pages/NotFound";
import Trending from "./pages/Trending";
import Bookmark from "./pages/Bookmark";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Home */}
        <Route index element={<Home />} />

        {/* Popular */}
        <Route path="popular" element={<Popular />} />

        {/* Trending */}
        <Route path="trending" element={<Trending />} />

        {/* Bookmark */}
        <Route path="bookmark" element={<Bookmark />} />

        {/* Dynamic Movie Details */}
        <Route path="movie/:id" element={<MovieDetails />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
