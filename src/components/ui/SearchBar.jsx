import Input from "./Input";
import IconSearch from "../../../public/assets/icon-search.svg?react";
function SearchBar() {
  return (
    <div className="items-center justify-left relative">
      <IconSearch className="text-white size-10 absolute top-1 left-2 " />
      <Input
        customstyle="text-[16px] pl-15"
        placeholder="Search for movies or TV series"
      />
    </div>
  );
}

export default SearchBar;
