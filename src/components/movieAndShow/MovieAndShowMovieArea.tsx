import React from "react";
import PopularContentContainer from "../PopularContentContainer";
import UpcomingContentContainer from "../UpcomingContentContainer";
import GenresContentContainer from "../GenresContentContainer";
import { useStoreMulti } from "../../helpers/useStoreMulti";
import FieldsetComp from "../home/FieldsetComp";

const MovieAndShowMovieArea = () => {
  const { genreMovie, popularMovie, topRatedMovie, upcomingMovie } =
    useStoreMulti(
      "genreMovie",
      "popularMovie",
      "topRatedMovie",
      "upcomingMovie"
    );
  return (
    <FieldsetComp title="Movies">
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
    </FieldsetComp>
  );
};

export default MovieAndShowMovieArea;
