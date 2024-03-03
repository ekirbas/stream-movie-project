import React, { useEffect, useState } from "react";
import ImageSliderData from "../components/movieAndShow/ImageSliderData";
import MovieAndShowMovieArea from "../components/movieAndShow/MovieAndShowMovieArea";
import MovieAndShowSeriesArea from "../components/movieAndShow/MovieAndShowSeriesArea";
import { useStoreMulti } from "../helpers/useStoreMulti";
import MobileTabsHome from "../components/home/MobileTabsHome";

const MovieAndShow = () => {
  const [pageWidth, setPageWidth] = useState<number>(outerWidth);
  const {
    popularMovie,
    fecthGenreMovie,
    fecthGenreSeries,
    fecthPopularMovie,
    fecthPopularSeries,
    fecthTopRatedMovie,
    fecthTopRatedSeries,
    fecthUpcomingMovie,
    fecthOnTheAirSeries,
  } = useStoreMulti(
    "popularMovie",
    "fecthGenreMovie",
    "fecthGenreSeries",
    "fecthPopularMovie",
    "fecthPopularSeries",
    "fecthTopRatedMovie",
    "fecthTopRatedSeries",
    "fecthUpcomingMovie",
    "fecthOnTheAirSeries"
  );
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
      setPageWidth(outerWidth);
    };
  }, []);
  return (
    <div className="movieAndShow">
      <div className="contentContainer">
        <ImageSliderData data={popularMovie?.slice(0, 4)} />
        {pageWidth > 798 ? (
          <>
            <MovieAndShowMovieArea />
            <MovieAndShowSeriesArea />
          </>
        ) : (
          <MobileTabsHome page={"movieAndShow"} activeTab_initial="movies2" />
        )}
      </div>
    </div>
  );
};

export default MovieAndShow;
