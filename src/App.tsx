//import reactLogo from "./assets/react.svg";
//import { ReactComponent as Logo } from "./assets/react.svg";
import { useEffect } from "react";
import { useApiStore } from "./store/store";
import "./styles/App.css";
import { Outlet } from "react-router";

function App() {
  const {
    fecthPopularMovie,
    fecthTopRatedMovie,
    fecthUpcomingMovie,
    fecthDetailMovie,
    fecthTrailerMovie,
    fecthCastMovie,
    fecthGenreMovie,
    fecthGenreSeries,
    fecthPopularSeries,
    fecthTopRatedSeries,
    fecthDetailSeries,
    fecthCastSeries,
    fecthDetailSeason,
    fecthTrailerSeries,
  } = useApiStore();

  useEffect(() => {
    /*   fecthPopularMovie("1");
    fecthUpcomingMovie("1");
    fecthDetailMovie("278");
    fecthTopRatedMovie("1");
    fecthTrailerMovie("278"); 
    fecthCastMovie("278");
    fecthGenreMovie();
    fecthGenreSeries();
    fecthPopularSeries("1");
    fecthTopRatedSeries("1");
    fecthDetailSeries("1429");
    fecthCastSeries("1429");
    fecthDetailSeason("1429", "2");
    fecthTrailerSeries("1429");*/
    fecthDetailSeason("1429", "2");
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
        }}
      >
        <h1>HELLO VITE </h1>
        {/* <Logo /> */}
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
