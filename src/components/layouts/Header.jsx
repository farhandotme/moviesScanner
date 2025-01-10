import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";

const Header = () => {
  const theme = useTheme()

  const handleSwitch = () => {
    theme.setTheme(theme.theme === 'dark' ? 'light' : 'dark')
  }
  const navLinkStyle = ({ isActive }) =>
    isActive ? "bg-orange-700 text-white px-2 py-1 rounded-full transition duration-300 ease-in-out" : "px-2 py-1 rounded-full transition duration-300 ease-in-out";

  return (
    <header className={theme.theme === 'dark' ? `bg-gray-800 text-white py-4` : `bg-white text-gray-800 py-4`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className="text-orange-500">Movies</span> Scanner
        </div>
        <nav className="space-x-4 flex justify-center items-center">
          <NavLink to="/" className={navLinkStyle}>Home</NavLink>
          <NavLink to="/movie" className={navLinkStyle}>Movies</NavLink>
          <NavLink to="/contact" className={navLinkStyle}>Contact</NavLink>
          <button className="text-2xl" onClick={handleSwitch}>{theme.theme === 'dark' ? <CiLight /> : <CiDark />}</button>
        </nav>
      </div>
    </header>
  )
}

export default Header;