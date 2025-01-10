
const GetMovieData = async ({ params }) => {
  const id = params.movieId
  
  const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`)
  const data = response.json()
  return data;
}

export default GetMovieData
