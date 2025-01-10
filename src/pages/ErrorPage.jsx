import { useNavigate } from "react-router-dom";

const ErrorPage = () => {

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(-1)
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
      <button onClick={handleSubmit} className="bg-orange-500 text-white px-6 py-3 rounded-full transition duration-300 ease-in-out hover:bg-orange-600">
        Go back home
      </button>
    </div>
  )
}

export default ErrorPage;