import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <Navbar />
        <Home />
      </div>
    </>
  );
}

export default App;
