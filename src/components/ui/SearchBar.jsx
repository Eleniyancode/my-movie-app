import Input from "./Input";
import IconSearch from "../../../public/assets/icon-search.svg?react";
import { useMovieContext } from "../../context/useMovieContext";
function SearchBar({ query, setQuery }) {
  const { searchMovies } = useMovieContext();

  function handleChange(e) {
    setQuery(e.target.value);
    searchMovies(query);
  }
  return (
    <div className="items-center justify-left relative">
      <IconSearch className="text-white size-10 absolute top-1 left-2 " />
      <Input
        customstyle="text-[16px] pl-15"
        placeholder="Search for movies or TV series"
        value={query}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default SearchBar;
