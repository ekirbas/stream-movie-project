import React, { useEffect } from "react";
import { useApiStore } from "../store/store";
import ImageSliderData from "../components/ImageSliderData";
import MovieAndShowMovieArea from "../components/MovieAndShowMovieArea";
import MovieAndShowSeriesArea from "../components/MovieAndShowSeriesArea";

const MovieAndShow = () => {
  const useApi = useApiStore();
  useEffect(() => {
    useApi.fecthGenreMovie();
    useApi.fecthGenreSeries();
    useApi.fecthPopularMovie("1");
    useApi.fecthPopularSeries("1");
    useApi.fecthTopRatedMovie("1");
    useApi.fecthTopRatedSeries("1");
    useApi.fecthUpcomingMovie("1");
    useApi.fecthOnTheAirSeries("1");
  }, []);
  return (
    <div className="movieAndShow">
      <div className="contentContainer">
        <ImageSliderData data={useApi.popularMovie?.slice(0, 4)} />
        <MovieAndShowMovieArea />
        <MovieAndShowSeriesArea />
      </div>
    </div>
  );
};

export default MovieAndShow;
