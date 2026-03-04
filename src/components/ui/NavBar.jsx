import NavHomeIcon from "../../../public/assets/icon-nav-home.svg?react";
import NavMoviesIcon from "../../../public/assets/icon-nav-movies.svg?react";
import NavTVSeriesIcon from "../../../public/assets/icon-nav-tv-series.svg?react";
import NavBookmarkIcon from "../../../public/assets/icon-nav-bookmark.svg?react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul className="flex lg:flex-col gap-5 md:gap-10 ">
        <li className="cursor-pointer">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white"
                : `text-[#5A698F] hover:text-red-primary transition duration-200`
            }
          >
            <NavHomeIcon />
          </NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink
            to="/trending"
            className={({ isActive }) =>
              isActive
                ? "text-white"
                : `text-[#5A698F] hover:text-red-primary transition duration-200`
            }
          >
            <NavMoviesIcon />
          </NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink
            to="popular"
            className={({ isActive }) =>
              isActive
                ? "text-white"
                : `text-[#5A698F] hover:text-red-primary transition duration-200`
            }
          >
            <NavTVSeriesIcon />
          </NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink
            to="/bookmark"
            className={({ isActive }) =>
              isActive
                ? "text-white"
                : `text-[#5A698F] hover:text-red-primary transition duration-200`
            }
          >
            <NavBookmarkIcon />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
