import Main from "./components/layout/Main";
import SideBar from "./components/layout/SideBar";

function App() {
  return (
    <>
      <div className="bg-blue-primary flex flex-col lg:flex-row p-5 w-screen h-screen overflow-hidden">
        <SideBar />
        <Main />
      </div>
    </>
  );
}

export default App;
