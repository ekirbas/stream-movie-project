import React from "react";
import PopularContentContainer from "./PopularContentContainer";
import UpcomingContentContainer from "./UpcomingContentContainer";
import GenresContentContainer from "./GenresContentContainer";
import { useApiStore } from "../store/store";

const MovieAndShowMovieArea = () => {
  const useApi = useApiStore();
  return (
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
  );
};

export default MovieAndShowMovieArea;
