import React, { useEffect, useState } from "react";
import HomeAboutArea from "../components/home/HomeAboutArea";
import HomeMovieArea from "../components/home/HomeMovieArea";
import HomeSerieArea from "../components/home/HomeSerieArea";
import { useStoreMulti } from "../helpers/useStoreMulti";

const Home = () => {
  const {
    fecthGenreMovie,
    fecthGenreSeries,
    fecthPopularMovie,
    fecthPopularSeries,
    fecthTopRatedMovie,
    fecthTopRatedSeries,
    fecthUpcomingMovie,
    fecthOnTheAirSeries,
  } = useStoreMulti(
    "fecthGenreMovie",
    "fecthGenreSeries",
    "fecthPopularMovie",
    "fecthPopularSeries",
    "fecthTopRatedMovie",
    "fecthTopRatedSeries",
    "fecthUpcomingMovie",
    "fecthOnTheAirSeries"
  );

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  useEffect(() => {
    fecthGenreMovie();
    fecthGenreSeries();
    fecthPopularMovie("1");
    fecthPopularSeries("1");
    fecthTopRatedMovie("1");
    fecthTopRatedSeries("1");
    fecthUpcomingMovie("1");
    fecthOnTheAirSeries("1");
    window.onresize = () => setWindowHeight(window.innerHeight);
  }, []);

  return (
    <>
      <HomeAboutArea windowHeight={windowHeight} />
      <div className="homeContainer" style={{ marginTop: `${windowHeight}px` }}>
        <div className="contentContainer">
          <HomeMovieArea />
          <HomeSerieArea />
        </div>
      </div>
    </>
  );
};

export default Home;
