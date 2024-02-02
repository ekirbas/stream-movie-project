import React from "react";
import GenresContentContainer from "../GenresContentContainer";
import PopularContentContainer from "../PopularContentContainer";
import UpcomingContentContainer from "../UpcomingContentContainer";
import { useApiStore } from "../../store/store";

const HomeMovieArea = () => {
  const useApi = useApiStore();
  return (
    <fieldset className="fieldS">
      <legend>
        <div className="title">Movies</div>
      </legend>
      <GenresContentContainer
        data={useApi.genreMovie}
        type="genre-movie"
        header="Movie Genres"
      />
      <PopularContentContainer
        header="Populer Movies"
        type="movie"
        data={useApi.popularMovie}
      />
      <PopularContentContainer
        header="Top Rated Movies"
        type="movie"
        data={useApi.topRatedMovie}
      />
      <UpcomingContentContainer
        header="New Releases Movies"
        type="movie"
        data={useApi.upcomingMovie}
      />
    </fieldset>
  );
};

export default HomeMovieArea;
