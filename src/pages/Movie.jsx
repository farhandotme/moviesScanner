import { useLoaderData } from "react-router-dom";
import Cards from "../components/UI/Cards";

const Movie = () => {
  const movies = useLoaderData();

  return (
    <>
      <Cards movies={movies} />
    </>
  );
};

export default Movie;
