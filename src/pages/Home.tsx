import React, { useEffect, useState } from "react";
import HomeAboutArea from "../components/home/HomeAboutArea";
import HomeMovieArea from "../components/home/HomeMovieArea";
import HomeSerieArea from "../components/home/HomeSerieArea";
import { useStoreMulti } from "../helpers/useStoreMulti";
import MobileTabsHome from "../components/home/MobileTabsHome";

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
  const [pageWidth, setPageWidth] = useState<number>(outerWidth);
  useEffect(() => {
    fecthGenreMovie();
    fecthGenreSeries();
    fecthPopularMovie("1");
    fecthPopularSeries("1");
    fecthTopRatedMovie("1");
    fecthTopRatedSeries("1");
    fecthUpcomingMovie("1");
    fecthOnTheAirSeries("1");
    window.onresize = () => {
      setWindowHeight(window.innerHeight);
      setPageWidth(outerWidth);
    };
  }, []);

  return (
    <>
      <HomeAboutArea windowHeight={windowHeight} />
      <div className="homeContainer" style={{ marginTop: `${windowHeight}px` }}>
        <div className="contentContainer">
          {pageWidth > 390 ? (
            <>
              <HomeMovieArea />
              <HomeSerieArea />
            </>
          ) : (
            <MobileTabsHome page="home" activeTab_initial="movies" />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
