import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Cards = ({ movies }) => {
  return (
    <div className="container mx-auto px-6 md:px-20 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* eslint-disable-next-line react/prop-types */}
        {movies.Search.map((movie, index) => (
          <NavLink to={movie.imdbID} key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
            <img src={movie.Poster} alt={movie.Title} className="w-full h-96 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-gray-900">{movie.Title}</h2>
              <p className="text-gray-700 mb-2">Type: {movie.Type}</p>
              <p className="text-gray-700">Year: {movie.Year}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Cards;