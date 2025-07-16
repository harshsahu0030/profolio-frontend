import { FiSun } from "react-icons/fi";
import { LuCloudMoon } from "react-icons/lu";
import { useTheme } from "../context/ThemeProvider";

const Header = () => {
  const { darkTheme, toggleTheme } = useTheme();

  return (
    <div
      id="header"
      className="h-full w-full flex items-center justify-between py-2 border-b-2 border-surface"
    >
      {/* left  */}
      <img
        src="/logo.png"
        alt="profolio-logo"
        height={100}
        width={100}
        className="h-full object-contain"
      />

      {/* right */}
      <button
        id="header-button"
        aria-label="toggle-theme"
        type="button"
        onClick={toggleTheme}
        className="h-full text-2xl cursor-pointer hover:scale-95 transition-all"
      >
        {darkTheme ? <FiSun /> : <LuCloudMoon />}
      </button>
    </div>
  );
};

export default Header;
