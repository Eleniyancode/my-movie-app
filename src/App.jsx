import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import MovieDetails from "./pages/MovieDetails";
import NotFound from "./pages/NotFound";
import Trending from "./pages/Trending";
import Bookmark from "./pages/Bookmark";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
function App() {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
