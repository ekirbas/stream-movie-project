import React, { useEffect } from "react";
import { useApiStore } from "../store/store";
import GenresContentContainer from "../components/GenresContentContainer";
import PopularContentContainer from "../components/PopularContentContainer";
import UpcomingContentContainer from "../components/UpcomingContentContainer";
import ImageSliderData from "../components/ImageSliderData";

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
        {/* Movie area */}
        <fieldset className="fieldS">
          <legend>
            <div className="title">Movies</div>
          </legend>

          <PopularContentContainer
            header="Populer Movies"
            data={useApi.popularMovie}
            type="movie"
          />
          <PopularContentContainer
            header="Top Rated Movies"
            data={useApi.topRatedMovie}
            type="movie"
          />
          <UpcomingContentContainer
            header="New Releases Movies"
            type="movie"
            data={useApi.upcomingMovie}
          />
          <GenresContentContainer
            data={useApi.genreMovie}
            type="genre-movie"
            header="Movie Genres"
          />
        </fieldset>
        {/* Serie area */}
        <fieldset className="fieldS">
          <legend>
            <div className="title">Series</div>
          </legend>

          <PopularContentContainer
            header="Populer Series"
            type="serie"
            data={useApi.popularSeries}
          />
          <PopularContentContainer
            header="Top Rated Series"
            type="serie"
            data={useApi.topRatedSeries}
          />
          <UpcomingContentContainer
            header="On The Air"
            type="serie"
            data={useApi.onTheAirSeries}
          />
          <GenresContentContainer
            data={useApi.genreSeries}
            type="genre-serie"
            header="Serie Genres"
          />
        </fieldset>
      </div>
    </div>
  );
};

export default MovieAndShow;
