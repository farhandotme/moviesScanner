
const GetApiData = async () => {
  const response = await fetch(`https://www.omdbapi.com/?s=breaking&apikey=${import.meta.env.VITE_API_KEY}`)
  const data = response.json()
  return data;
}

export default GetApiData
