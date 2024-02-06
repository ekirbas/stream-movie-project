import React from "react";
import PopularContentContainer from "../PopularContentContainer";
import UpcomingContentContainer from "../UpcomingContentContainer";
import GenresContentContainer from "../GenresContentContainer";
import { useStoreMulti } from "../../helpers/useStoreMulti";

const MovieAndShowMovieArea = () => {
  const { genreMovie, popularMovie, topRatedMovie, upcomingMovie } =
    useStoreMulti(
      "genreMovie",
      "popularMovie",
      "topRatedMovie",
      "upcomingMovie"
    );
  return (
    <fieldset className="fieldS">
      <legend>
        <div className="title">Movies</div>
      </legend>

      <PopularContentContainer
        header="Populer Movies"
        data={popularMovie}
        type="movie"
      />
      <PopularContentContainer
        header="Top Rated Movies"
        data={topRatedMovie}
        type="movie"
      />
      <UpcomingContentContainer
        header="New Releases Movies"
        type="movie"
        data={upcomingMovie}
      />
      <GenresContentContainer
        data={genreMovie}
        type="genre-movie"
        header="Movie Genres"
      />
    </fieldset>
  );
};

export default MovieAndShowMovieArea;
