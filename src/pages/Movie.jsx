import { useLoaderData } from "react-router-dom";
import Cards from "../components/UI/Cards";
import { useTheme } from "../context/ThemeContext";

const Movie = () => {
  const movies = useLoaderData();

  const theme = useTheme()

  const handleCardTheme = () => {
    theme.theme === 'dark' ? 'text-white bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gray-200 text-black'
  }

  return (
    <div className={handleCardTheme}>
      <Cards movies={movies} />
    </div>
  );
};

export default Movie;
