import NavBar from "../ui/NavBar";

function SideBar() {
  return (
    <div className="lg:w-[8%] h-[10%] w-full lg:h-full bg-blue-secondary rounded-lg p-5 flex lg:flex-col items-center justify-between">
      <div className="flex md:flex-2 lg:flex-1 lg:flex-col gap-10 items-center justify-center md:justify-around">
        <img src="../assets/logo.svg" alt="logo-icon" className="size-5" />
        <NavBar />
      </div>
      <div className="md:flex-1 md:flex md:justify-end md:items-end ">
        <img
          src="../assets/image-avatar.png"
          alt="image-avatar"
          className="size-10"
        />
      </div>
    </div>
  );
}

export default SideBar;
