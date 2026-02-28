import SearchBar from "../ui/SearchBar";
import TrendingList from "./TrendingList";

function Main() {
  return (
    <div className="mx-5 w-[95%] mt-5">
      <SearchBar />
      <TrendingList />
    </div>
  );
}

export default Main;
