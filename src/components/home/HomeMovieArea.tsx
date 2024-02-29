import React from "react";
import GenresContentContainer from "../GenresContentContainer";
import PopularContentContainer from "../PopularContentContainer";
import UpcomingContentContainer from "../UpcomingContentContainer";
import { useStoreMulti } from "../../helpers/useStoreMulti";
import FieldsetComp from "./FieldsetComp";

const HomeMovieArea = () => {
  const { genreMovie, popularMovie, topRatedMovie, upcomingMovie } =
    useStoreMulti(
      "genreMovie",
      "popularMovie",
      "topRatedMovie",
      "upcomingMovie"
    );
  return (
    <>
      <FieldsetComp title="Movies">
        <GenresContentContainer
          data={genreMovie}
          type="genre-movie"
          header="Movie Genres"
        />
        <PopularContentContainer
          header="Populer Movies"
          type="movie"
          data={popularMovie}
        />
        <PopularContentContainer
          header="Top Rated Movies"
          type="movie"
          data={topRatedMovie}
        />
        <UpcomingContentContainer
          header="New Releases Movies"
          type="movie"
          data={upcomingMovie}
        />
      </FieldsetComp>
    </>
  );
};

export default HomeMovieArea;
