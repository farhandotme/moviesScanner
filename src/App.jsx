import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Contact, { contactData } from "./pages/Contact";
import AppLayout from "./components/layouts/AppLayout";
import ErrorPage from "./pages/ErrorPage";
import GetApiData from "./API/GetApiData";
import GetMovieData from "./API/GetMovieData";
import Movie from "./pages/Movie";
import MovieDetails from "./components/UI/MovieDetails";
import { ThemeContext } from "./context/ThemeContext";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");

  console.log(theme);
  
  const Router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <ThemeContext.Provider value={{ theme, setTheme }}>
            <AppLayout />
          </ThemeContext.Provider>
        </>
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: GetApiData,
        },
        {
          path: "/movie/:movieId",
          element: <MovieDetails />,
          loader: GetMovieData,
        },
        {
          path: "/contact",
          element: <Contact />,
          action: contactData,
        },
      ],
    },
  ]);
  return <RouterProvider router={Router} />;
}

export default App;
