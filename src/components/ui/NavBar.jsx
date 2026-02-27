import NavHomeIcon from "../../../public/assets/icon-nav-home.svg?react";
import NavMoviesIcon from "../../../public/assets/icon-nav-movies.svg?react";
import NavTVSeriesIcon from "../../../public/assets/icon-nav-tv-series.svg?react";
import NavBookmarkIcon from "../../../public/assets/icon-nav-bookmark.svg?react";

function NavBar() {
  return (
    <nav>
      <ul className="flex flex-col gap-5 ">
        <li className="cursor-pointer">
          <NavHomeIcon className="text-[#5A698F] hover:text-white transition duration-200" />
        </li>
        <li className="cursor-pointer">
          <NavMoviesIcon className="text-[#5A698F] hover:text-white transition duration-200" />
        </li>
        <li className="cursor-pointer">
          <NavTVSeriesIcon className="text-[#5A698F] hover:text-white transition duration-200" />
        </li>
        <li className="cursor-pointer">
          <NavBookmarkIcon className="text-[#5A698F] hover:text-white transition duration-200" />
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
