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
      <div className="mx-5" onClick={toggleDarkMode} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && toggleDarkMode()}>
        <input
          type="checkbox"
          checked={isDarkMode}
          readOnly
          className="toggle text-red-900 border-indigo-600 bg-white checked:border-orange-500 checked:bg-black"
        />
      </div>
    </div>
  );
};

export default Mode;
