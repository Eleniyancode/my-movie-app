import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuthContext";
import { useBookmark } from "../context/useBookmarkContext";
import RecommendedMovieCard from "../components/ui/RecommendedMovieCard";
import TVSeriesCard from "../components/ui/TVSeriesCard";

export default function Bookmark() {
  const { user } = useAuth();
  const { bookmarks } = useBookmark();
  const navigate = useNavigate();

  // 3️⃣ Separate movies and TV series
  // const movieBookmarks = bookmarks.filter(
  //   (item) => item.media_type === "movie",
  // );

  // const tvBookmarks = bookmarks.filter((item) => item.media_type === "tv");

  // 1️⃣ User not logged in
  if (!user) {
    return (
      <div className="bookmark-container text-white flex w-full h-full justify-center items-center flex-col">
        <h2>Bookmark Movies</h2>

        <p>
          You need to log in or create an account to start bookmarking movies.
        </p>

        <div className="bookmark-actions">
          <button onClick={() => navigate("/login")}>Login</button>

          <button onClick={() => navigate("/signup")}>Create Account</button>
        </div>
      </div>
    );
  }

  // 2️⃣ Logged in but no bookmarks
  if (bookmarks.length === 0) {
    return (
      <div className="bookmark-container">
        <h2>Your Bookmarks</h2>

        <p>You haven't bookmarked any movies yet.</p>
      </div>
    );
  }

  // 3️⃣ User has bookmarked movies
  return (
    <div className="bookmark-container text-white h-screen overflow-y-scroll w-full">
      <h2>Your Bookmarked Movies</h2>

      {bookmarks.length > 0 && (
        <>
          <div className="bookmark-grid text-white">
            {bookmarks.map((movie) => (
              <RecommendedMovieCard movie={movie} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
