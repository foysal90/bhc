import useDarkMode from "./DarkMode";
import "../../../src/App.css";
import { MdDarkMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";

const Mode = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark-mode" : ""}>
      <button className="mx-5" onClick={toggleDarkMode}>
        <input
          type="checkbox"
          checked={isDarkMode}
          readOnly
          className="toggle text-red-900 border-indigo-600 bg-white checked:border-orange-500 checked:bg-black"
        />
      </button>
    </div>
  );
};

export default Mode;
