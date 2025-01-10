import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

// eslint-disable-next-line react/prop-types
const Cards = ({ movies }) => {
  const theme = useTheme();
  return (
    <div
      className={`${theme.theme === "dark"
        ? "text-white bg-gray-900"
        : "bg-gray-200 text-black"
        } container mx-auto px-6 md:px-20 py-10`}
    >
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6`}
      >
        {/* eslint-disable-next-line react/prop-types */}
        {movies.Search.map((movie, index) => (
          <NavLink
            to={movie.imdbID}
            key={index}
            className={`rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 ${theme.theme === "dark"
              ? "bg-gray-800 text-white"
              : "bg-white text-gray-900"
              }`}
          >
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-full h-96 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{movie.Title}</h2>
              <p className="mb-2">Type: {movie.Type}</p>
              <p>Year: {movie.Year}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Cards;
