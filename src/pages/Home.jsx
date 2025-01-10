import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const movies = [
  {
    title: "Inception",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology.",
    image: "https://imgs.search.brave.com/NfZuEmsR4zyNvUyGnR5ZPmCiu9okA65orlzWv1XrxMo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50aGVtb3ZpZWRi/Lm9yZy90L3AvdzUz/M19hbmRfaDMwMF9i/ZXN0djIvOFpUVnF2/S0RROGVtU0dVRU1q/c1M0eUhBd3JwLmpw/Zw"
  },
  {
    title: "Oppenheimer",
    description: "the American theoretical physicist who played a key role in the development of the first nuclear weapons during World War II",
    image: "https://imgs.search.brave.com/5b4e8fA4PYST80Bya524qhSmKhrp-nH_DYChBcYXP80/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1jZG4uaHlwYi5z/dC9odHRwczovL2h5/cGViZWFzdC5jb20v/aW1hZ2UvMjAyMi8x/Mi9jaHJpc3RvcGhl/ci1ub2xhbi1vcHBl/bmhlaW1lci1maXJz/dC1sb29rLWltYWdl/cy1lbWlseS1ibHVu/dC1yb2JlcnQtZG93/bmV5LWpyLWNpbGxp/YW4tbXVycGh5LTAw/MS5qcGc_cT03NSZ3/PTgwMCZjYnI9MSZm/aXQ9bWF4"
  },
  {
    title: "Joker",
    description: "The Joker is a supervillain and the archenemy of Batman, known for his clown-like appearance and sadistic sense of humor. He was first introduced in Batman",
    image: "https://imgs.search.brave.com/B5JeIgVQJTB_fh8gwIS3OPIpZovNSfE0vHcQgHU_Q9o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLmNvbGxpZGVy/aW1hZ2VzLmNvbS93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzLzIwMTkvMDkv/am9rZXItYXJ0aHVy/LWZsZWNrLWpvYXF1/aW4tcGhvZW5peC02/MDB4NDAwLmpwZWc"
  },
  {
    title: "The Dark Knight",
    description: "When the menace known as the Joker emerges from his mysterious past.",
    image: "https://imgs.search.brave.com/omyDxlP2eKFxBy-KzcLsu20DXDLlCy-GW7haDJghzqo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zLnlp/bWcuY29tL255L2Fw/aS9yZXMvMS4yL3U5/VTYuZExKbGltVEh3/eXlmbTVrRHctLS9Z/WEJ3YVdROWFHbG5h/R3hoYm1SbGNqdDNQ/VGsyTUR0b1BUUXdO/QS0tL2h0dHBzOi8v/bWVkaWEuemVuZnMu/Y29tL2VuX3VzL01v/dmllcy9QaG90b0cv/ZGFyay1rbmlnaHQt/cHJvZHVjdGlvbi1z/dGlsbHMtd2FybmVy/LWJyb3MtMjAwOC0x/MDA1OS5qcGc"
  },
  {
    title: "Interstellar",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    image: "https://imgs.search.brave.com/MZXtaZNPGUPeAQuwB5o-swxWFGXHZSGhtoj5KatQWRI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2NiL2Uw/L2NjL2NiZTBjYzY0/ODYwNjlmOTQ3YzE3/NmYyMWM5MDMyZTMz/LmpwZw"
  }
];

const Home = () => {

  const theme = useTheme()
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true
  };

  const handleTheme = () => {
    return theme.theme === 'dark' ? 'text-gray-100 ' : 'text-black'
  }

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center py-12 ${theme.theme === 'dark' ? 'text-white bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gray-200 '}`}>
      <div className="container mx-auto px-6 md:px-12 py-10">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className={`text-5xl font-extrabold mb-4 ${handleTheme}`}>Welcome to Movie Scanner</h1>
          <p className={`text-lg ${handleTheme} `}>Discover, explore, and experience the world of movies like never before!</p>
        </header>

        {/* About Section */}
        <section className="mb-12">
          <h2 className={`text-3xl font-bold  mb-6 ${handleTheme}`}>About Us</h2>
          <p className={`${handleTheme} text-lg leading-relaxed`}>
            Movie Scanner is your gateway to exploring a wide range of movies from classics to the latest blockbusters. Dive into our curated
            collection, watch trailers, and read detailed descriptions to find your next favorite movie.
          </p>
        </section>

        {/* Slider Section */}
        <section className="mb-12">
          <Slider {...settings}>
            {movies.map((movie, index) => (
              <div key={index} className="relative">
                <img src={movie.image} alt={movie.title} className="w-full h-96 object-cover rounded-lg shadow-2xl" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 rounded-b-lg">
                  <h2 className="text-2xl font-bold text-white">{movie.title}</h2>
                  <p className="mt-2 text-gray-300">{movie.description}</p>
                  <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition">
                    Explore Now
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </section>

        {/* Explore Section */}
        <section className="text-center">
          <h2 className={`text-3xl font-bold ${handleTheme} mb-6`}>Ready to Explore?</h2>
          <NavLink to="/movie" className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-full text-lg shadow-lg hover:opacity-90 transition">
            Start Your Journey
          </NavLink>
        </section>
      </div>
    </div>
  );
};

export default Home;