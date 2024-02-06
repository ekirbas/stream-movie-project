import React, { useEffect } from "react";
import ImageSliderData from "../components/movieAndShow/ImageSliderData";
import MovieAndShowMovieArea from "../components/movieAndShow/MovieAndShowMovieArea";
import MovieAndShowSeriesArea from "../components/movieAndShow/MovieAndShowSeriesArea";
import { useStoreMulti } from "../helpers/useStoreMulti";

const MovieAndShow = () => {
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
  }, []);
  return (
    <div className="movieAndShow">
      <div className="contentContainer">
        <ImageSliderData data={popularMovie?.slice(0, 4)} />
        <MovieAndShowMovieArea />
        <MovieAndShowSeriesArea />
      </div>
    </div>
  );
};

export default MovieAndShow;
