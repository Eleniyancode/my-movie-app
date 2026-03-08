import NavBar from "../ui/NavBar";
import { auth } from "../../firebase/firebase";
import { signOut } from "firebase/auth";
import { useAuth } from "../../context/useAuthContext";

function SideBar() {
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  return (
    <div className="lg:w-[8%] h-[10%] w-full lg:h-full bg-blue-secondary rounded-lg p-5 flex lg:flex-col items-center justify-between">
      <div className="flex md:flex-2 lg:flex-1 lg:flex-col gap-10 items-center justify-center md:justify-around">
        <img src="../assets/logo.svg" alt="logo-icon" className="size-5" />
        <NavBar />
      </div>
      <div className="md:flex-1 md:flex flex md:flex-col md:justify-end md:items-center gap-5 ">
        {user && (
          <button
            onClick={() => handleLogout()}
            className="text-white py-3 px-2 bg-blue-tertiary rounded-2xl cursor-pointer hover:bg-blue-secondary hover:text-red-primary transition duration-200"
          >
            Logout
          </button>
        )}

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
