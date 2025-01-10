import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const Footer = () => {
  const theme = useTheme()
  return (

    <footer className={theme.theme === 'dark' ? 'bg-gray-800 text-white py-10' : 'bg-white text-gray-800 py-10'}>
      <div className="container mx-auto px-6 md:px-12 flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h1 className="text-2xl font-bold"><span className="text-orange-500">Movies</span> Scanner</h1>
          <p className="mt-4">
            Movies Scanner is a website created for learning purposes. It showcases modern web design and development techniques.
          </p>
          <div className="mt-4">
            <span className="block"><i className="fas fa-phone mr-2"></i>123-456-789</span>
            <span className="block"><i className="fas fa-envelope mr-2"></i>info@moviesscanner.com</span>
          </div>
          <div className="mt-4 flex space-x-4">
            <NavLink to="#" className="hover:text-orange-500"><i className="fab fa-facebook"></i></NavLink>
            <NavLink to="#" className="hover:text-orange-500"><i className="fab fa-twitter"></i></NavLink>
            <NavLink to="#" className="hover:text-orange-500"><i className="fab fa-instagram"></i></NavLink>
            <NavLink to="#" className="hover:text-orange-500"><i className="fab fa-linkedin"></i></NavLink>
          </div>
        </div>

        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <ul className="mt-4 space-y-2">
            <li><NavLink to="#" className="hover:text-orange-500">Events</NavLink></li>
            <li><NavLink to="#" className="hover:text-orange-500">Team</NavLink></li>
            <li><NavLink to="#" className="hover:text-orange-500">Mentors</NavLink></li>
            <li><NavLink to="#" className="hover:text-orange-500">Gallery</NavLink></li>
            <li><NavLink to="#" className="hover:text-orange-500">Terms and Conditions</NavLink></li>
          </ul>
        </div>

        <div className="w-full md:w-1/3">
          <h2 className="text-xl font-semibold">Contact us</h2>
          <form className="mt-4">
            <input type="email" name="email" className="w-full bg-gray-700 border border-gray-600 text-white p-2 mb-4" placeholder="Your email address..." />
            <textarea name="message" className="w-full bg-gray-700 border border-gray-600 text-white p-2 mb-4" placeholder="Your message..."></textarea>
            <button type="submit" className="w-full bg-orange-500 text-white py-2 hover:bg-orange-600">
              <i className="fas fa-envelope mr-2"></i>Send
            </button>
          </form>
        </div>
      </div>

      <div className="text-center mt-10">
        &copy; moviesscanner.com | Designed by Me
      </div>
    </footer>
  )
}

export default Footer;