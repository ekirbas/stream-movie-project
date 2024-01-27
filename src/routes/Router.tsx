import { RouterProvider, createBrowserRouter } from "react-router-dom";
/* import App from "../App"; */
import ErrorPage from "../pages/ErrorPage";
import MovieAndShow from "../pages/MovieAndShow";
import Subscriptions from "../pages/Subscriptions";
import Support from "../pages/Support";
import MovieDetail from "../pages/MovieDetail";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import SeriesDetail from "../pages/SeriesDetail";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Layout,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/movie-and-series",
          element: <MovieAndShow />,
        },
        {
          path: "/subscriptions",
          element: <Subscriptions />,
        },
        {
          path: "/support",
          element: <Support />,
        },
        {
          path: "/movie/:movie_id",
          element: <MovieDetail />,
        },
        {
          path: "/serie/:serie_id",
          element: <SeriesDetail />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
