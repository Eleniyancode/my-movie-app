import Input from "./Input";
import IconSearch from "../../../public/assets/icon-search.svg?react";
import { useMovieContext } from "../../context/useMovieContext";
import { useAuth } from "../../context/useAuthContext";
import { auth } from "../../firebase/firebase";
import { signOut } from "firebase/auth";
function SearchBar({ query, setQuery }) {
  const { searchMovies } = useMovieContext();
  const { user } = useAuth();

  function handleChange(e) {
    setQuery(e.target.value);
    searchMovies(query);
  }

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  return (
    <div className="flex gap-3 items-center justify-left md:justify-between px-5 relative">
      <IconSearch className="text-white size-10 absolute top-1 left-6 " />
      <Input
        customstyle="text-[16px] pl-15"
        placeholder="Search for movies or TV series"
        value={query}
        onChange={(e) => handleChange(e)}
      />

      {user && (
        <button
          onClick={() => handleLogout()}
          className="text-white py-3 px-2 bg-blue-tertiary rounded-2xl cursor-pointer hover:bg-blue-secondary hover:text-red-primary transition duration-200"
        >
          Logout
        </button>
      )}
    </div>
  );
}

export default SearchBar;
