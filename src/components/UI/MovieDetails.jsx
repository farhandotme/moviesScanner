import { useLoaderData } from "react-router-dom";

const MovieDetails = () => {
  const data = useLoaderData();
  return (
    <div className="container mx-auto px-6 md:px-12 py-10">
      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={data.Poster} alt={data.Title} className="w-full md:w-1/3 h-auto object-cover" />
        <div className="p-6 md:p-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">{data.Title}</h1>
          <p className="text-gray-700 mb-4">{data.Plot}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p className="text-gray-700"><strong>Director:</strong> {data.Director}</p>
            <p className="text-gray-700"><strong>Writer:</strong> {data.Writer}</p>
            <p className="text-gray-700"><strong>Actors:</strong> {data.Actors}</p>
            <p className="text-gray-700"><strong>Genre:</strong> {data.Genre}</p>
            <p className="text-gray-700"><strong>Language:</strong> {data.Language}</p>
            <p className="text-gray-700"><strong>Country:</strong> {data.Country}</p>
            <p className="text-gray-700"><strong>Released:</strong> {data.Released}</p>
            <p className="text-gray-700"><strong>Runtime:</strong> {data.Runtime}</p>
            <p className="text-gray-700"><strong>Rated:</strong> {data.Rated}</p>
            <p className="text-gray-700"><strong>Box Office:</strong> {data.BoxOffice}</p>
            <p className="text-gray-700"><strong>Awards:</strong> {data.Awards}</p>
            <p className="text-gray-700"><strong>Metascore:</strong> {data.Metascore}</p>
            <p className="text-gray-700"><strong>IMDB Rating:</strong> {data.imdbRating}</p>
            <p className="text-gray-700"><strong>IMDB Votes:</strong> {data.imdbVotes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;