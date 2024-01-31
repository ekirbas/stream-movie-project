import React, { useEffect, useState } from "react";
import { useApiStore } from "../store/store";
import HomeAboutArea from "../components/HomeAboutArea";
import HomeMovieArea from "../components/HomeMovieArea";
import HomeSerieArea from "../components/HomeSerieArea";
const Home = () => {
  const useApi = useApiStore();
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  useEffect(() => {
    useApi.fecthGenreMovie();
    useApi.fecthGenreSeries();
    useApi.fecthPopularMovie("1");
    useApi.fecthPopularSeries("1");
    useApi.fecthTopRatedMovie("1");
    useApi.fecthTopRatedSeries("1");
    useApi.fecthUpcomingMovie("1");
    useApi.fecthOnTheAirSeries("1");
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
