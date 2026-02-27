import NavBar from "../ui/NavBar";

function SideBar() {
  return (
    <div className="w-[8%] h-full bg-blue-secondary rounded-lg p-5 flex flex-col items-center justify-between">
      <div className="flex flex-col gap-10 items-center justify-center">
        <img src="../assets/logo.svg" alt="logo-icon" className="size-5" />
        <NavBar />
      </div>
      <div>
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
