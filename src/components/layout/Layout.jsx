import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Main from "./Main";

function Layout() {
  return (
    <>
      <div className="bg-blue-primary flex flex-col lg:flex-row md:p-5 w-screen h-screen overflow-hidden">
        <SideBar />
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
